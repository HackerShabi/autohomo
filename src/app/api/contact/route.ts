import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Lead } from "@/models/Lead";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, website, traffic, message } = body;

        if (!name || !email || !phone || !website || !traffic) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const newLead = await Lead.create({
            name,
            email,
            phone,
            website,
            traffic,
            message,
        });

        return NextResponse.json(
            { success: true, lead: newLead },
            { status: 201 }
        );
    } catch {
        console.error("Error creating lead");
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
