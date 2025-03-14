import { NextResponse } from "next/server";
import connectDB from "@/mongodb";
import Order from "@/models/order";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        await connectDB();

        const formData = await req.json();

        // Generate a unique order ID (e.g., ORD-12345)
        const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);

        // Save order in MongoDB
        const newOrder = new Order({
            orderId,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            pincode: formData.pincode,
            address: formData.address,
        });

        await newOrder.save();

        // Send confirmation email
        await sendOrderEmail(formData.email, formData.name, orderId);

        return NextResponse.json({ success: true, orderId }, { status: 200 });
    } catch (error) {
        console.error("Order API Error:", error);
        return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
    }
}

// Function to send email
async function sendOrderEmail(userEmail, userName, orderId) {
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
            subject: "Order Confirmation - CapLock",
            html: `
                <h2>Hello ${userName},</h2>
                <p>Thank you for your order!</p>
                <p>Your Order ID is: <strong>${orderId}</strong></p>
                <p>We will update you once your order is shipped.</p>
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