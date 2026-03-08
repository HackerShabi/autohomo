
import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { cookies } from "next/headers";

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const cookieStore = cookies();
        if (cookieStore.get("admin_session")?.value !== "authenticated") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;
        if (!id) {
            return NextResponse.json({ error: "Lead ID is required" }, { status: 400 });
        }

        await connectToDatabase();

        const deletedLead = await Lead.findByIdAndDelete(id);

        if (!deletedLead) {
            return NextResponse.json({ error: "Lead not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting lead:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
