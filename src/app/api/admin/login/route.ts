import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        const expectedEmail = process.env.ADMIN_EMAIL;
        const expectedPassword = process.env.ADMIN_PASSWORD;

        if (!expectedEmail || !expectedPassword) {
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        if (email === expectedEmail && password === expectedPassword) {
            const response = NextResponse.json({ success: true });

            // Set a simple auth cookie (in production, use JWT or proper session)
            response.cookies.set("admin_session", "authenticated", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24, // 1 day
                path: "/",
            });

            return response;
        }

        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
