import { validateQuestion } from "@/libs/validation";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = validateQuestion.safeParse(body);

    // Check if validation is successful
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.format() },
        { status: 400 }
      );
    }

    const { email, message } = validation.data;
    // Check if a similar question already exists
    const existingQuestion = await prisma.footerForm.findFirst({
      where: { email },
    });

    if (existingQuestion) {
      return NextResponse.json(
        { error: "You have already submitted a question" },
        { status: 400 }
      );
    }

    // Create a new question entry in the database
    const question = await prisma.footerForm.create({
      data: { email, message },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Question submitted successfully",
        data: question,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting question:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
