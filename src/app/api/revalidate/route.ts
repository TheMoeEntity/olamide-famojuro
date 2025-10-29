// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Verify the request has the correct secret
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await request.json();

    console.log("Revalidation request body:", body);
    if (body._type === "home") {
      revalidatePath("/");
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Revalidation triggered successfully",
    });
  } catch (err) {
    const error = err as Error;
    console.error("Revalidation error:", err);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
