import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { contactSchema } from "@/lib/contact-schema";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const parsed = contactSchema.safeParse(body);
          if (!parsed.success) {
            return Response.json(
              { error: "Validation failed", details: parsed.error.flatten() },
              { status: 400 }
            );
          }
          const { name, email, message } = parsed.data;
          const { error } = await supabaseAdmin
            .from("contact_messages")
            .insert({ name, email, message });
          if (error) {
            console.error("contact insert error", error);
            return Response.json({ error: "Failed to save message" }, { status: 500 });
          }
          return Response.json({ success: true });
        } catch (err) {
          console.error("contact handler error", err);
          return Response.json({ error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});