import React from 'react';
import Meta from '../partials/seo';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import Contacting from '../components/Contacting';

export default function Contact(props) {
    return (
        <div className="">
            <Meta
                title={`Contact ${props.company} | Trust Your Job To Experts`}
                desc={`Contact ${props.company} to find out more about our ${props.industry} services`}
                canonical={`${props.website}/contact`} />
            <Navigationbar phone={props.phone} companyName={props.companyName} quote={true} services={true} />
            <Contacting contactSubtitle={props.contactSubtitle} companyName={props.companyName} contactDesc={props.contactDesc} />
            <Footer
            companyName={props.companyName}
            address={props.address}
            email={props.email}
            phone={props.phone}
            />
        </div>
    )
}