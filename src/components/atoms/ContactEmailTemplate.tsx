import React from 'react';

interface EmailTemplateProps {
    first_name: string;
    last_name: string;
    email: string;
    message: string;
}

const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({// @ts-ignore
                                                                          first_name, last_name, message, email
                                                                      }) => {
    return (
        // @ts-ignore
        <div>
            <p>Contact is {first_name} {last_name},</p>
            <p>{message}</p>
            <p>You can reach contact at {email} for any further information.</p>
        </div>
    );
};

export default ContactEmailTemplate;