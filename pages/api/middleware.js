import { NextRequest, NextResponse } from "next/server";
import NextCors from "nextjs-cors";

export async function middleware(req) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
}
