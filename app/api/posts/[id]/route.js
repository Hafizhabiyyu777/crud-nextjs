// url: http://localhost:3000/api/posts/1234

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params })=> {
    try {

        const { id } = params;

        const Post = await prisma.post.findUnique({
            where: {
                id
            }
        });

        if(Post== null) {
            return NextResponse.json({ message: "ID Tidak Ditemukan"}, { status: 404 });
        }


        return NextResponse.json(Post);
    } catch(err) {
        console.error("Post Error:", err);
        if (err.code === "P2023") {
            // Handle specific Prisma error related to ObjectID format
            return NextResponse.json({ message: "ID Tidak Ditemukan", error: err }, { status: 404 });
        } else {
            // Handle other errors
            return NextResponse.json({ message: "get Error", error: err }, { status: 500 });
        }
        
    }
}

export const PATCH = async (request, {params})=> {
    try {
        const body = await request.json();
        const { title, description } = body;

        const {id}= params;

        const updatePost = await prisma.Post.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        })



        return NextResponse.json(updatePost);
    } catch(err) {
        if (err.code === "P2025") {
            // Handle specific Prisma error related to ObjectID format
            return NextResponse.json({ message: "ID Tidak Ditemukan", error: err }, { status: 404 });
        } else {
            // Handle other errors
            return NextResponse.json({ message: "Update Error", error: err }, { status: 500 });
        }
    }
}

export const DELETE = async (request, { params })=> {
    try {

        const { id } = params;

        await prisma.post.delete({
            where: {
                id
            }
        });

        return NextResponse.json("Post has been deleted");
    } catch(err) {
        console.error("Delete Error:", err);
        if (err.code === "P2023") {
            // Handle specific Prisma error related to ObjectID format
            return NextResponse.json({ message: "ID Tidak Ditemukan", error: err }, { status: 404 });
        } else {
            // Handle other errors
            return NextResponse.json({ message: "Delete Error", error: err }, { status: 500 });
        }
        
    }
}
