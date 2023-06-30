import sendgrid from "@sendgrid/mail";
import {NextResponse} from "next/server";
import {dilov_email} from "@/constants";

type EmailType = {
  first_name?: string,
  last_name?: string,
  email?: string,
  message?: string,
}


export async function POST(req: Request) {
  const {first_name, last_name, email, message}: EmailType = await req.json()
  const msg = {
    to: dilov_email,
    from: dilov_email,
    subject: 'New Client From Website',
    html: `
    <div style="border: 1px solid black; border-radius: 10px;padding: 40px">
        <h3> Client's Name is ${first_name} ${last_name} </h3>
        <p>${message}</p>
        <strong>Email : <a href={mailto:${email}}>${email}</a> </strong>
    </div>
    `
  }

  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)
    await sendgrid.send(msg)
    return NextResponse.json({message: "Contact Email Sent Successfully"});
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}