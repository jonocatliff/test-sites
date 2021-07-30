import React from 'react';
import Thanks from '../components/Thanks';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import Meta from '../partials/seo';

export default function ThankYou(props) {
    return (
        <div>
        <Meta 
        title={`Thank You | ${props.companyName}`}
        desc={`Thank you for inquiring about with ${props.companyName}. We look forward to servicing you!`}
        canonical={`${props.website}/thank-you`}
        />
        <Navigationbar phone={props.phone} companyName={props.companyName} quote={true} services={true} />
        <Thanks />
        <Footer
        companyName={props.companyName}
        address={props.address}
        email={props.email}
        phone={props.phone}
        />
        </div>
    )
}