import dns from "dns";
import mongoose from "mongoose";

// Fix: Router/ISP DNS may block SRV record lookups required by mongodb+srv://
// Force Node's DNS resolver to use Google (8.8.8.8) and Cloudflare (1.1.1.1)
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const MONGODB_URI = process.env.MONGODB_URI;

/* eslint-disable @typescript-eslint/no-explicit-any */
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connectToDatabase;
