import { NextResponse } from "next/server";
import connectDB from "@/mongodb";
import Order from "@/models/order";

export async function POST(req) {
    try {
        await connectDB();

        const formData = await req.json();

        // Generate a unique order ID (e.g., ORD-12345)
        const orderId = "ORD-" + Math.floor(10000 + Math.random() * 90000);

        const newOrder = new Order({
            orderId,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            pincode: formData.pincode,
            address: formData.address,
        });

        await newOrder.save();

        return NextResponse.json({ success: true, orderId }, { status: 200 });
    } catch (error) {
        console.error("Order API Error:", error);
        return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
    }
}
