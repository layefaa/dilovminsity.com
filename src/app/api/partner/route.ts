import {NextResponse} from "next/server";
import {Resend} from "resend";
import {PartnerEmail} from '../../../components/atoms';

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


const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
    const {
        name, email, organization,
        website,
        address,
        phone,
        type,
        other,
    } = await request.json();
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['dilovministry@gmail.com'],
            subject: 'New Partner from Website',
            // html: '<p>Testing<p/>'
            react: PartnerEmail({
                name, email, organization,
                website,
                address,
                phone,
                type,
                other,
            }),
        });

        return NextResponse.json({
            status: 'Ok'
        }, {
            status: 200
        });
    } catch (e) {
        if (e instanceof Error) {
            console.log(`Failed to send email: ${e.message}`);
        }
        return NextResponse.json({
            error: 'Internal server error.'
        }, {
            status: 500
        })
    }
}