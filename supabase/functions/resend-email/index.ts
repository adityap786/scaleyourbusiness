import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.33.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const serviceApiKey = req.headers.get('x-service-api-key');
    if (!serviceApiKey || serviceApiKey !== Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')) {
      return new Response(
        JSON.stringify({ error: "Unauthorized. Missing or invalid service execution key." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 401 }
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      phone,
      areaOfInterest,
      projectDetails,
      device_id
    } = body;

    // Strict 500 Character Server-Side Limit
    if (
      (name && name.length > 500) ||
      (email && email.length > 500) ||
      (phone && phone.length > 500) ||
      (areaOfInterest && areaOfInterest.length > 500) ||
      (projectDetails && projectDetails.length > 500)
    ) {
      return new Response(
        JSON.stringify({ error: "Payload exceeds maximum length of 500 characters." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

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

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    // Common Style Variables
    const brandBlue = "#3b82f6";
    const bgLight = "#ffffff";
    const bgOffset = "#fafafa";
    const textMain = "#171717";
    const textMuted = "#737373";

    // 1. ADMIN NOTIFICATION EMAIL HTML
    const adminHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Project Enquiry</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; line-height: 1.6;">
      
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f5f5f5;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: ${bgLight}; border: 1px solid #eaeaea; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.04);">
              
              <!-- Cinematic Header (Light Theme) -->
              <tr>
                <td style="background-color: ${bgLight}; padding: 60px 40px; text-align: center; position: relative; border-bottom: 1px solid #eaeaea;">
                  <h1 style="color: ${textMain}; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                    Scale Your <span style="color: ${brandBlue}; font-style: italic;">Business</span>
                  </h1>
                  <!-- Subtle abstract glow representation -->
                  <div style="width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 70%); position: absolute; top: -20px; right: -20px;"></div>
                </td>
              </tr>

              <!-- Title Section -->
              <tr>
                <td style="padding: 40px 40px 20px 40px;">
                  <h2 style="margin: 0 0 12px 0; color: ${textMain}; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">New Project Enquiry Received</h2>
                  <p style="margin: 0; color: ${textMuted}; font-size: 16px;">A potential client has submitted a new project enquiry through your website.</p>
                </td>
              </tr>

              <!-- Lead Information Card -->
              <tr>
                <td style="padding: 20px 40px;">
                  <div style="background-color: ${bgOffset}; border: 1px solid #eaeaea; border-radius: 12px; padding: 24px;">
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #a3a3a3; font-weight: 700;">Name</p>
                          <p style="margin: 4px 0 0 0; font-size: 16px; color: ${textMain}; font-weight: 600;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <p style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #a3a3a3; font-weight: 700;">Email</p>
                          <p style="margin: 4px 0 0 0; font-size: 16px; color: ${textMain}; font-weight: 600;">${email}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 24px;">
                          <p style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #a3a3a3; font-weight: 700;">Phone</p>
                          <p style="margin: 4px 0 0 0; font-size: 16px; color: ${textMain}; font-weight: 600;">${phone || "Not provided"}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Highlight Badge -->
                    <div style="border-top: 1px solid #eaeaea; padding-top: 24px; margin-bottom: 24px;">
                      <p style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #a3a3a3; font-weight: 700;">Service Requested</p>
                      <span style="display: inline-block; background-color: #eff6ff; color: ${brandBlue}; padding: 8px 16px; border-radius: 6px; font-weight: 700; font-size: 14px; border: 1px solid #bfdbfe;">
                        ${areaOfInterest}
                      </span>
                    </div>

                    <!-- Project Details -->
                    <div>
                      <p style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #a3a3a3; font-weight: 700;">Project Details</p>
                      <div style="background-color: ${bgLight}; border: 1px solid #eaeaea; border-radius: 8px; padding: 16px; color: #404040; font-size: 15px; white-space: pre-wrap;">${projectDetails}</div>
                    </div>

                  </div>
                </td>
              </tr>

              <!-- Call to Action Section -->
              <tr>
                <td style="padding: 20px 40px 40px 40px;">
                  <p style="margin: 0 0 24px 0; color: ${textMuted}; font-size: 15px; text-align: center;">Respond quickly to increase your chances of converting this enquiry into a client.</p>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="center">
                        <a href="mailto:${email}" style="display: inline-block; background-color: ${brandBlue}; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 50px; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 14px rgba(59,130,246,0.3);">
                          Reply to Client
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Brand Footer -->
              <tr>
                <td style="background-color: ${bgOffset}; border-top: 1px solid #eaeaea; padding: 32px 40px; text-align: center;">
                  <h4 style="margin: 0 0 8px 0; color: ${textMain}; font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Scale Your Business</h4>
                  <p style="margin: 0 0 16px 0; color: ${textMuted}; font-size: 14px;">Building digital foundations for modern businesses.</p>
                  <a href="https://scaleyourbusiness.online" style="color: ${brandBlue}; text-decoration: none; font-weight: 700; font-size: 14px;">scaleyourbusiness.online</a>
                </td>
              </tr>

            </table>
            
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // 2. USER AUTO-RESPONSE EMAIL HTML
    const userHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Enquiry Received - Scale Your Business</title>
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

              <!-- Thank You Content -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="margin: 0 0 20px 0; color: ${textMain}; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">Enquiry Received</h2>
                  
                  <p style="margin: 0 0 16px 0; color: #404040; font-size: 16px;">Hi ${name},</p>
                  <p style="margin: 0 0 24px 0; color: #404040; font-size: 16px;">Thank you for reaching out to Scale Your Business. We have successfully received your enquiry regarding <strong>${areaOfInterest}</strong>.</p>
                  
                  <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <p style="margin: 0; color: #1e40af; font-size: 15px; font-weight: 500;">Our team is reviewing your project details and will be in touch with you shortly to discuss the next steps.</p>
                  </div>

                  <hr style="border: none; border-top: 1px solid #eaeaea; margin: 32px 0;" />
                  
                  <h3 style="margin: 0 0 12px 0; color: ${textMain}; font-size: 16px; font-weight: 700;">Your Submission Summary</h3>
                  <div style="background-color: ${bgOffset}; border: 1px solid #eaeaea; border-radius: 8px; padding: 16px; color: ${textMuted}; font-size: 14px; white-space: pre-wrap;">${projectDetails}</div>

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

    // Send Email to Admin (new lead)
    const adminRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + RESEND_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Scale Your Business <hello@enquiries.scaleyourbusiness.online>",
        to: ["hello@enquiries.scaleyourbusiness.online"],
        subject: `🚀 New Project Enquiry — ${name}`,
        html: adminHtml
      })
    });

    if (!adminRes.ok) {
      const adminError = await adminRes.text();
      console.error("Resend admin email failed:", adminRes.status, adminError);
      return new Response(
        JSON.stringify({ error: "Failed to send notification email.", details: adminError }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 502 }
      );
    }

    // Auto reply to User
    const userRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + RESEND_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Scale Your Business <hello@enquiries.scaleyourbusiness.online>",
        to: [email],
        subject: "We've received your enquiry — Scale Your Business",
        html: userHtml
      })
    });

    if (!userRes.ok) {
      const userError = await userRes.text();
      console.error("Resend user email failed:", userRes.status, userError);
      // Don't fail entirely — admin was notified. Log and continue.
    }

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