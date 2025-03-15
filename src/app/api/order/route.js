import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb"; // Ensure correct path
import Order from "@/models/order";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        await connectDB();

        const formData = await req.json();

        // Generate a unique order ID (e.g., ORD-12345)
        const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);

        // Save order with product details in MongoDB
        const newOrder = new Order({
            orderId,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            pincode: formData.pincode,
            address: formData.address,
            product: {
                title: formData.product.title,
                price: formData.product.price,
                image: formData.product.image
            }
        });

        await newOrder.save();

        // Send confirmation email
        await sendOrderEmail(formData.email, formData.name, orderId, formData.product);

        return NextResponse.json({ success: true, orderId }, { status: 200 });
    } catch (error) {
        console.error("Order API Error:", error);
        return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
    }
}

// Function to send order confirmation email
async function sendOrderEmail(userEmail, userName, orderId, product) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "caplock.connect@gmail.com", // Replace with your Gmail
                pass: "afez bejo xxza auiz" // Replace with your Gmail App Password
            }
        });

        const mailOptions = {
            from: '"CapLock Team" <caplock.connect@gmail.com>',
            replyTo: "support@caplock.com", // Helps avoid spam
            to: userEmail,
            subject: "✅ Order Confirmation - CapLock",
            text: `Hello ${userName},\n\nThank you for your order!\nYour Order ID: ${orderId}\n\nProduct Details:\n- ${product.title}\n- Price: ₹${product.price}\n\nWe will notify you once your order is shipped.\n\nBest Regards,\nCapLock Team`,

            html: `
                <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #222;">Hello ${userName},</h2>
                    <p>Thank you for your order! We have received your request, and your order is now being processed.</p>
                    
                    <h3>Order Details</h3>
                    <p><strong>Order ID:</strong> ${orderId}</p>

                    <div style="display: flex; align-items: center; gap: 20px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
                        <img src="${product.image}" alt="${product.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 5px;">
                        <div>
                            <p><strong>Product:</strong> ${product.title}</p>
                            <p><strong>Price:</strong> ₹${product.price}</p>
                        </div>
                    </div>

                    <p>We will notify you once your order is shipped.</p>
                    
                    <p style="margin-top: 20px;">Best Regards,<br><strong>CapLock Team</strong></p>
                </div>
            `,
            headers: {
                "X-Priority": "1",
                "X-Mailer": "CapLock Order System",
                "X-MSMail-Priority": "High"
            }
        };

        await transporter.sendMail(mailOptions);
        console.log("Order confirmation email sent to:", userEmail);
    } catch (error) {
        console.error("Email sending error:", error);
    }
}
