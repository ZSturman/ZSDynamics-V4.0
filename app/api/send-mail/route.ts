import type { NextRequest, NextResponse } from "next/server";

type ContactFormRequestBody = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Parse the request body
    const body = await req.json();

    // Validate that the request has the required properties
    if (body.hasOwnProperty("name") && body.hasOwnProperty("email")) {
      // Send the data to the external API endpoint
      const response = await fetch("https://www.zsdynamics.com/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Send the form data as JSON
      });

      // Check if the response is successful
      if (response.ok) {
        const responseData = await response.json();
        return new Response(
          JSON.stringify({ message: responseData.message }),
          { status: 200 }
        );
      } else {
        return new Response(
          JSON.stringify({ error: "Email sending failed" }),
          { status: response.status }
        );
      }
    } else {
      // If the required properties are missing, return an error response
      return new Response(
        JSON.stringify({ error: "Invalid request: Missing name or email" }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error contacting email server:", error);
    return new Response(
      JSON.stringify({ error: "Email sending failed due to server error" }),
      { status: 500 }
    );
  }
}
