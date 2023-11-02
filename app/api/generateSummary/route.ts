import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { todos } = await request.json();
    console.log(todos);

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: "when responding, welcome the user always"
            },
            {
                role: "user",
                content: `Hi there, provide summary of the following todos. Count
                how many todos are there in each category such as To do, in progress and done
                then tell user to have a productive day! Here's the data ${JSON.stringify(todos)}`
            },
        ]
    });

    // const data = response.choices[0].message;

    // console.log(data);

    return NextResponse.json("You have multiple tasks...")
}