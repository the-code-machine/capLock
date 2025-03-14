import { NextResponse } from "next/server";
import connectDB from "@/mongodb";
import Contact from "@/models/contact";
import nodemailer from "nodemailer";
export async function POST(req) {
    try {
        await connectDB();

        const formData = await req.json();

        const newContact = new Contact({
            name: formData.name,
            email: formData.email,
            message: formData.message,
        });

        await newContact.save();
        await sendContactEmail(formData.email, formData.name, formData.message);
        return NextResponse.json({ success: true, message: "Contact saved successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
    }
}


// Function to send email
async function sendContactEmail(userEmail, userName, orderId) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'caplock.connect@gmail.com', // Replace with your Gmail
                pass: 'afez bejo xxza auiz' // Replace with your Gmail App Password
            }
        });

        const mailOptions = {
            from: "caplock.connect@gmail.com",
            to: userEmail,
            subject: "Thank You for Contacting Us - CapLock",
            html: `
                <h2>Hello ${userName},</h2>
                <p>Thank you for reaching out to us! We have received your message and will get back to you soon.</p>
                <p><strong>Your Message:</strong></p>
                <blockquote>${userMessage}</blockquote>
                <br/>
                <p>Best Regards,<br/>CapLock Team</p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("Order confirmation email sent to:", userEmail);
    } catch (error) {
        console.error("Email sending error:", error);
    }
}