-- Enable the pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create the chats table
CREATE TABLE IF NOT EXISTS public.chats (
    id TEXT NOT NULL,
    user_id UUID DEFAULT auth.uid(),
    payload JSONB
);

-- Create the reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reviewer_name TEXT,
    reviewer_job_title TEXT,
    reviewer_business_size TEXT,
    rating NUMERIC,
    review_date TIMESTAMP,
    review_title TEXT,
    review_likes TEXT,
    review_dislikes TEXT,
    review_problem TEXT,
    review_recommendations TEXT,
    review_link TEXT,
    embedding VECTOR(1536)
);

-- Add constraints to the chats table
ALTER TABLE public.chats ADD CONSTRAINT chats_pkey PRIMARY KEY (id);
ALTER TABLE public.chats ADD CONSTRAINT chats_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Enable Row Level Security (RLS) on the chats table
ALTER TABLE public.chats ENABLE ROW LEVEL SECURITY;

-- Create policies for the chats table
CREATE POLICY "Allow public read for shared chats"
ON public.chats
FOR SELECT
TO public
USING ((payload ->> 'sharePath'::text) IS NOT NULL);

CREATE POLICY "Allow full access to own chats"
ON public.chats
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Create the match_reviews function (assuming it exists based on your code)
CREATE OR REPLACE FUNCTION public.match_reviews(query_embedding VECTOR(1536), match_threshold FLOAT, match_count INT)
RETURNS TABLE (
    id UUID,
    reviewer_name TEXT,
    reviewer_job_title TEXT,
    reviewer_business_size TEXT,
    rating NUMERIC,
    review_date TIMESTAMP,
    review_title TEXT,
    review_likes TEXT,
    review_dislikes TEXT,
    review_problem TEXT,
    review_recommendations TEXT,
    review_link TEXT,
    similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        reviews.id,
        reviews.reviewer_name,
        reviews.reviewer_job_title,
        reviews.reviewer_business_size,
        reviews.rating,
        reviews.review_date,
        reviews.review_title,
        reviews.review_likes,
        reviews.review_dislikes,
        reviews.review_problem,
        reviews.review_recommendations,
        reviews.review_link,
        1 - (reviews.embedding <=> query_embedding) AS similarity
    FROM reviews
    WHERE 1 - (reviews.embedding <=> query_embedding) > match_threshold
    ORDER BY reviews.embedding <=> query_embedding
    LIMIT match_count;
END;
$$;