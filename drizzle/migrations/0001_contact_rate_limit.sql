CREATE INDEX contact_submissions_email_created_idx ON public.contact_submissions (email, created_at DESC);
CREATE FUNCTION public.check_contact_rate_limit() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
 PERFORM pg_advisory_xact_lock(hashtextextended(NEW.email, 0));
 IF EXISTS (SELECT 1 FROM public.contact_submissions WHERE request_id = NEW.request_id) THEN RETURN NEW; END IF;
 IF (SELECT count(*) FROM public.contact_submissions WHERE email = NEW.email AND created_at > now() - interval '1 hour') >= 5 THEN
  RAISE EXCEPTION 'contact_rate_limit';
 END IF;
 RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.check_contact_rate_limit() FROM PUBLIC, anon, authenticated;
CREATE TRIGGER contact_submission_rate_limit BEFORE INSERT ON public.contact_submissions FOR EACH ROW EXECUTE FUNCTION public.check_contact_rate_limit();