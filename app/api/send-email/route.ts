import { NextResponse } from "next/server";
import type ResponseInit from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const emailHost: string = process.env.EMAIL_HOST as string;
    const emailUser: string = process.env.EMAIL_USER as string;
    const emailPassword: string = process.env.EMAIL_PASSWORD as string;
    const recipientEmail: string = process.env.RECIPIENT_EMAIL as string;

    if (!emailHost || !emailUser || !emailPassword || !recipientEmail) {
      console.error("Missing environment variables for SMTP configuration.");
      return NextResponse.json({ error: "Server configuration error." }, {
        status: 500,
      } as ResponseInit);
    }

    console.log("Request received");

    let name: string, email: string, message: string;
    try {
      const requestBody = await req.json();
      if (
        typeof requestBody.name !== "string" ||
        typeof requestBody.email !== "string" ||
        typeof requestBody.message !== "string"
      ) {
        console.error("Missing required form fields");
        return NextResponse.json(
          { error: "Invalid request body or missing form fields." },
          { status: 400 } as ResponseInit,
        );
      }

      ({ name, email, message } = requestBody);
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          "Invalid request body or missing form fields:",
          error.message,
        );
      } else {
        console.error("Unknown error while parsing request body");
      }
      return NextResponse.json(
        { error: "Invalid request body or missing form fields." },
        { status: 400 } as ResponseInit,
      );
    }

    console.log("Parsed request body: Form fields validated successfully.");

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    try {
      await transporter.verify();
      console.log("SMTP server verified successfully.");
    } catch (error) {
      if (error instanceof Error) {
        console.error("SMTP authentication failed:", error.message);
      } else {
        console.error("Unknown error while verifying SMTP server");
      }
      return NextResponse.json(
        { error: "Authentication failed. Please check your SMTP credentials." },
        { status: 401 } as ResponseInit,
      );
    }

    const mailOptions = {
      from: emailUser,
      to: recipientEmail,
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      return NextResponse.json({ message: "Email sent successfully" }, {
        status: 200,
      } as ResponseInit);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error sending email:", error.message);
      } else {
        console.error("Unknown error while sending email");
      }
      return NextResponse.json({ error: "Failed to send email." }, {
        status: 500,
      } as ResponseInit);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Unexpected error occurred:", error.message);
    } else {
      console.error("Unknown unexpected error occurred");
    }
    return NextResponse.json({ error: "Unexpected server error." }, {
      status: 500,
    } as ResponseInit);
  }
}
