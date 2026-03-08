import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = cookies();
        if (cookieStore.get("admin_session")?.value !== "authenticated") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectToDatabase();

        // Fetch leads, sorted by newest first
        const leads = await Lead.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, leads });
    } catch (error) {
        console.error("Error fetching leads:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
