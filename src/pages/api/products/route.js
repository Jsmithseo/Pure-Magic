import { NextResponse } from "next/server";
import { getProducts } from "@/libs/getProducts";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const first = Number(searchParams.get("first") || 11);

  const products = await getProducts(first);
  return NextResponse.json({ products });
}