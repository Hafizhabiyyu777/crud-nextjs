// url: http://localhost:3000/api/posts

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request)=> {
    try {
        const body = await request.json();
        const { title, description } = body;


        const newPost = await prisma.Post.create({
            data: {
                title,
                description
            }
        })

        return NextResponse.json(newPost);
    } catch(err) {
        console.error("Post Error:", err);
        return NextResponse.json({message: "Post Error ", error: err}, {status: 500})
    }
}

export const GET = async ()=> {
    try {

        const Post = await prisma.Post.findMany();

        return NextResponse.json(Post);
    } catch(err) {
        console.error("Post Error:", err);
        return NextResponse.json({message: "Post Error ", error: err}, {status: 500})
    }
}

