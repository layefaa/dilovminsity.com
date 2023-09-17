import React from 'react';

interface PartnerTemplateProps {

    name?: string,
    email?: string,
    organization?: string,
    website?: string,
    address?: string,
    phone?: string,
    type?: string,
    other?: string,
}

const PartnerEmailTemplate: React.FC<Readonly<PartnerTemplateProps>> = ({// @ts-ignore
                                                                            name,
                                                                            organization,
                                                                            address,
                                                                            type,
                                                                            phone,
                                                                            website,
                                                                            email
                                                                        }) => {
    return (
        // @ts-ignore
        <div>
            <h1>New Partner</h1>
            <p>Here are the details of our partnership:</p>
            <ul>
                <li>Name : {name}</li>
                <li>Organization Name: {organization}</li>
                <li>Website: {website}</li>
                <li>Address: {address}</li>
                <li>Type of Partnership: {type}</li>
                <li>Contact Email: {email}</li>
                <li>Contact Phone: {phone}</li>
            </ul>
        </div>
    );
};

export default PartnerEmailTemplate;