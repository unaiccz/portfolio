import { NextResponse } from "next/server";
import { Post } from "@/utils/models";
import { connectdb } from "@/utils/db";
export const GET = async (req, {params}) => {
    const { slug } = params;
    try {
        connectdb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({error: error.message});
    }
} 
export const DELETE = async (req, {params}) => {
    const { slug } = params;
    try {
        connectdb();
        const post = await Post.findOneAndDelete({slug});
        if (!post) {
            return NextResponse.json({error: "Post not found"});
        }
        return NextResponse.json({message: "Post deleted successfully"});
    } catch (error) {
        return NextResponse.json({error: error.message});
    }
}