import { NextResponse } from "next/server";
import connectDB from "@/mongodb";
import Contact from "@/models/contact";

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

        return NextResponse.json({ success: true, message: "Contact saved successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
    }
}
