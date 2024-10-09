-- Enable Row Level Security (RLS) on the reviews table
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create a policy for the reviews table to allow public read access
CREATE POLICY "Allow public read access to reviews"
ON public.reviews
FOR SELECT
TO public
USING (true);

-- Revoke all privileges from public on the reviews table
REVOKE ALL ON public.reviews FROM public;

-- Grant select privilege to public on the reviews table
GRANT SELECT ON public.reviews TO public;

-- Create a role for managing reviews
CREATE ROLE reviews_manager;

-- Grant necessary privileges to the reviews_manager role
GRANT INSERT, UPDATE, DELETE ON public.reviews TO reviews_manager;

-- Improve the chats table RLS
DROP POLICY IF EXISTS "Allow public read for shared chats" ON public.chats;
DROP POLICY IF EXISTS "Allow full access to own chats" ON public.chats;

CREATE POLICY "Allow public read for shared chats"
ON public.chats
FOR SELECT
TO public
USING ((payload->>'sharePath') IS NOT NULL AND (payload->>'isPublic')::boolean = true);

CREATE POLICY "Allow full access to own chats"
ON public.chats
FOR ALL
TO authenticated
USING (auth.uid() = user_id);

-- Add a check constraint to ensure rating is between 0 and 5
ALTER TABLE public.reviews ADD CONSTRAINT check_rating_range CHECK (rating >= 0 AND rating <= 5);

-- Add a not null constraint to important columns
ALTER TABLE public.reviews
  ALTER COLUMN reviewer_name SET NOT NULL,
  ALTER COLUMN rating SET NOT NULL,
  ALTER COLUMN review_date SET NOT NULL,
  ALTER COLUMN review_title SET NOT NULL;

-- Create an index on the embedding column for faster similarity searches
CREATE INDEX ON public.reviews USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);