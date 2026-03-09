import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json();
    const { email, device_id } = body;

    // Strict 25 Character Server-Side Limit
    if (email && email.length > 25) {
      return new Response(
        JSON.stringify({ error: "Payload exceeds maximum length of 25 characters." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    const deviceIdentifier = `${clientIp}_${device_id || 'unknown'}`;

    const { data: deviceData, error: deviceError } = await supabase
      .from('device_submissions')
      .select('submission_count, last_submission_at')
      .eq('device_identifier', deviceIdentifier)
      .maybeSingle();

    if (deviceData) {
      if (deviceData.submission_count >= 3) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Maximum 3 submissions allowed per month." }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 429 }
        );
      }

      const lastSubmission = new Date(deviceData.last_submission_at);
      const hoursSinceLastSubmission = (new Date().getTime() - lastSubmission.getTime()) / (1000 * 60 * 60);

      if (hoursSinceLastSubmission < 12) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please wait 12 hours between submissions." }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 429 }
        );
      }
    }

    // Insert into DB
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (dbError) {
      if (dbError.code === '23505') {
        return new Response(
          JSON.stringify({ error: 'This email is already subscribed.' }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }
      throw new Error("Failed to save subscriber to database");
    }

    // Common Style Variables
    const brandBlue = "#3b82f6";
    const bgLight = "#ffffff";
    const bgOffset = "#fafafa";
    const textMain = "#171717";
    const textMuted = "#737373";

    // USER NEWSLETTER OPT-IN EMAIL HTML
    const userHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Scale Your Business Newsletter</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; line-height: 1.6;">
      
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f5f5f5;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: ${bgLight}; border: 1px solid #eaeaea; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.04);">
              
              <!-- Header -->
              <tr>
                <td style="padding: 40px; text-align: center; border-bottom: 1px solid #eaeaea; background-color: ${bgLight}; position: relative;">
                  <h1 style="color: ${textMain}; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                    Scale Your <span style="color: ${brandBlue}; font-style: italic;">Business</span>
                  </h1>
                </td>
              </tr>

              <!-- Welcome Content -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="margin: 0 0 20px 0; color: ${textMain}; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">You're on the list!</h2>
                  
                  <p style="margin: 0 0 16px 0; color: #404040; font-size: 16px;">Hi there,</p>
                  <p style="margin: 0 0 24px 0; color: #404040; font-size: 16px;">Thanks for subscribing to the <strong>Scale Your Business</strong> newsletter.</p>
                  
                  <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <p style="margin: 0; color: #1e40af; font-size: 15px; font-weight: 500;">Expect high-value insights, exclusive updates, and actionable strategies directly in your inbox to help you scale your operations efficiently.</p>
                  </div>

                  <p style="margin: 0 0 24px 0; color: #404040; font-size: 16px;">We’re thrilled to have you join our growing community of tech leaders and forward-thinking businesses.</p>
                </td>
              </tr>

              <!-- Brand Footer -->
              <tr>
                <td style="background-color: ${bgOffset}; padding: 40px; text-align: center; border-top: 1px solid #eaeaea;">
                  <h4 style="margin: 0 0 12px 0; color: ${textMain}; font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Scale Your Business</h4>
                  <p style="margin: 0 0 20px 0; color: ${textMuted}; font-size: 14px;">Building digital foundations for modern businesses.</p>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="center">
                        <a href="https://scaleyourbusiness.online" style="display: inline-block; background-color: ${brandBlue}; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 14px rgba(59,130,246,0.3);">
                          Visit Website
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            </table>
            
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Send Opt-in Email to User
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + RESEND_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Scale Your Business <hello@enquiries.scaleyourbusiness.online>",
        to: [email],
        subject: "Welcome to the Scale Your Business Newsletter! 🚀",
        html: userHtml
      })
    });

    if (deviceData) {
      await supabase
        .from('device_submissions')
        .update({
          submission_count: deviceData.submission_count + 1,
          last_submission_at: new Date().toISOString()
        })
        .eq('device_identifier', deviceIdentifier);
    } else {
      await supabase
        .from('device_submissions')
        .insert({
          device_identifier: deviceIdentifier,
          submission_count: 1,
          last_submission_at: new Date().toISOString()
        });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMsg }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }

});
