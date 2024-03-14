import { NextResponse } from "next/server";
import { Post } from "@/utils/models";
import { connectdb } from "@/utils/db";
export const GET = async (req) => {
    try {
        connectdb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({error: error.message});
    }
}
