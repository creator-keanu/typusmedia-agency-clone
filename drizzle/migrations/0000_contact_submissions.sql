CREATE TABLE public.contact_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 40),
 company text NOT NULL DEFAULT '' CHECK (char_length(company) <= 150),
 services text[] NOT NULL DEFAULT '{}',
 budget text NOT NULL DEFAULT 'Noch offen',
 message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 5000),
 privacy_consent boolean NOT NULL CHECK (privacy_consent),
 request_id uuid NOT NULL UNIQUE
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.contact_submissions IS 'Private contact inquiries; server-only writes, owner access through Lovable Cloud.';