import React from 'react';
import BlogFeed from '../components/blog/blogFeed';
import styles from '../components/Patterns.module.css';
import Meta from '../partials/seo';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';

export default function Blog(props) {
    console.log(props)
    return (
        <div id={styles.stars} className="">
            <Navigationbar phone={props.phone} companyName={props.companyName} quote={true} services={true} />
            <Meta 
            title={`${props.companyName} Blog | Our ${props.industry} Blog`}
            desc={`Find out more about ${props.industry} by reading ${props.companyName}'s blog`}
            canonical={`${props.website}/blog`}
            />
            <BlogFeed industry={props.industry} />
            <Footer
            companyName={props.companyName}
            address={props.address}
            email={props.email}
            phone={props.phone}
            />
        </div>
    )
}