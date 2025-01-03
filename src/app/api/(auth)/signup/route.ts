import { NextRequest, NextResponse } from "next/server";
import { validateSignup } from "@/libs/validation";
import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = validateSignup.safeParse(body);

    // check if validation is success
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.format() },
        { status: 400 }
      );
    }

    // get data from validation
    const { name, email, password } = validation.data;

    // check if user already exists
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (findUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user in database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log("Error create user", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
