import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.json();
        const url = `https://script.google.com/macros/s/AKfycbwrLS4zIOym4AgQ3NIxHdhd9411XxiAFN60y6qQA4b9YagywDjQ0DiiTw6Fo7JLpIgiTA/exec`
        const response = await fetch(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

        const data = await response.json();

        if (data.success) {
            return NextResponse.json({ success: true, orderId: data.orderId }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, error: "Failed to process order" }, { status: 500 });
        }

    } catch (error) {
        console.error("Error processing order:", error);
        return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
    }
}
