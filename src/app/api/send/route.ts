import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>", // Or your verified domain
      to: "yourname@gmail.com", // your inbox
      subject: subject || `Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response("Failed to send email", { status: 500 });
    }

console.log("Email sent:", data);
    return new Response("Message sent successfully");
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response("Server error", { status: 500 });
  }
}
