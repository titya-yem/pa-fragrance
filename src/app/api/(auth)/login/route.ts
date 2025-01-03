import { validateLogin } from "@/libs/validation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const body = await req.json();

  const validation = validateLogin.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  }
}
