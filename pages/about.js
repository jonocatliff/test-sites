import React from 'react';
import TextTiles from '../components/TextTiles';
import styles from '../components/Patterns.module.css'
import Meta from '../partials/seo';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer'
import Link from 'next/link';
import AboutPage from '../components/AboutPage';


export default function About(props) {
    return (
        <div className="">
            <Meta
                title={`About ${props.company} | Your ${props.industry} Company`}
                desc=""
                canonical={`${props.website}/about`}/>
            <Navigationbar
                companyName={props.companyName}
                phone={props.phone}
                quote={true}
                services={true}/>
            <AboutPage
            aboutTitle={props.aboutTitle}
            companyName={props.companyName}
            aboutDesc={props.aboutDesc}
            aboutDesc2={props.aboutDesc2}
            aboutTile1={props.aboutTile1}
            aboutTile2={props.aboutTile2}
            aboutTile3={props.aboutTile3}
            />
            <Footer
            companyName={props.companyName}
            phone={props.phone}
            address={props.address}
            email={props.email}
            />
        </div>
    )
}
