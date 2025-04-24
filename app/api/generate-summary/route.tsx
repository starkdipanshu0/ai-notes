import { NextResponse } from "next/server";
import Replicate from "replicate";
function extractSummaryFromResponse(response: string): string {
    const cleaned = response.replace(/<think>[\s\S]*?<\/think>/, '').trim();
    return cleaned;
  }
export async function POST(req: Request): Promise<Response> {
    try {
      // Parse the request body
      const { prompt } = await req.json();
  
      if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
        return NextResponse.json(
          { error: "The 'prompt' field is required and must be a non-empty string." },
          { status: 400 }
        );
      }
      const input = {
        prompt: prompt,
    };
  
      // Initialize Replicate client
      const replicate = new Replicate({
        auth: process.env.REPLICATE_API_KEY,
      });
      
      let result = "";
        // Call the Replicate model
        for await (const event of replicate.stream("deepseek-ai/deepseek-r1", { input })) {
            console.log("Received event:", event);
            if (typeof event === "string") {
                
                result += event;
              } else if (typeof event === "object" && "data" in event) {
                result += event.data;
              }
        }; 
        result=extractSummaryFromResponse(result);
      
      console.log("Generated summary from server:", result);
      return NextResponse.json({ result }, { status: 200 });
  
    } catch (error: any) {
      console.error("Error processing request:", error);
      return NextResponse.json(
        { error: error.message || "Internal server error." },
        { status: 500 }
      );
    }
  }
  