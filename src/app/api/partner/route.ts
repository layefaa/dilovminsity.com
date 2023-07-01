import sendgrid from "@sendgrid/mail";
import {NextResponse} from "next/server";
import {dilov_email} from "@/constants";

type PartnerType = {
  name?: string,
  email?: string,
  organization?: string,
  website?: string,
  address?: string,
  phone?: string,
  type?: string,
  other?: string,
}


export async function POST(req: Request) {
  const {name, email, organization, website, other, phone, type, address}: PartnerType = await req.json()
  const msg = {
    to: dilov_email,
    from: dilov_email,
    subject: 'New Partner From Website',
    html: `
    <div style="border: 1px solid black; border-radius: 10px;padding: 40px">
        <h3> Client's Name is ${name} </h3>
        <p>Organisation Name :${organization}</p>
        <p>Address : ${address}</p>
        <p>Website : ${(website)}</p>
        <p>Phone : ${phone}</p>
        <p>Partner Type : ${type}</p>
        <p>Other Partner Type : ${other}</p>
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