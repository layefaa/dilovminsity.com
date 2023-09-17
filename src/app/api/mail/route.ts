import {ContactEmail} from '../../../components/atoms';
import {NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
    const { first_name, email, last_name, message } = await request.json();
    try {
         await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['dilovministry@gmail.com'],
            subject: 'New Contact from Website',
            // html: '<p>Testing<p/>'
            react: ContactEmail({first_name, email, last_name, message}),
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
