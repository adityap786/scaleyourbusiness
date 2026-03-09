CREATE EXTENSION IF NOT EXISTS pg_cron;

CREATE TABLE IF NOT EXISTS public.device_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    device_identifier TEXT UNIQUE NOT NULL,
    submission_count INT NOT NULL DEFAULT 0,
    last_submission_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

ALTER TABLE public.device_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role has full access" ON public.device_submissions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Schedule monthly cleanup on the 1st day of the month at 00:00 (UTC)
-- The extension needs to be enabled for the 'cron' schema to exist.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_extension WHERE extname = 'pg_cron'
  ) THEN
    PERFORM cron.schedule(
        'monthly-device-tracking-cleanup', 
        '0 0 1 * *',                       
        'TRUNCATE TABLE public.device_submissions;'
    );
  END IF;
END $$;
