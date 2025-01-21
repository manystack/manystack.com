import { NextResponse } from "next/server"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json()

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    const messageBody = `Email: ${email}\n\nMessage: ${message}`

    const params = {
      Source: process.env.EMAIL_FROM!,
      Destination: {
        ToAddresses: [process.env.EMAIL_TO!],
      },
      Message: {
        Subject: {
          Data: "Inquiry from manystack.com",
        },
        Body: {
          Text: { Data: messageBody },
        },
      },
    }

    const command = new SendEmailCommand(params)
    const response = await sesClient.send(command)

    return NextResponse.json({
      message: "Email sent successfully",
      messageId: response.MessageId,
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email", details: (error as Error).message },
      { status: 500 }
    )
  }
}
