
    import About from '../../../components/About';
    import Approach from '../../../components/Approach';
    import FAQ from '../../../components/FAQ';
    import Header from '../../../components/Header';
    import Intro from '../../../components/Intro';
    import Navigationbar from '../../../components/Navigationbar';
    import Savings from '../../../components/Savings';
    import Services from '../../../components/Services';
    import Testimonial from '../../../components/Testimonial';
    import Link from 'next/link';
    import CTABottom from '../../../components/CTABottom';
    import Footer from '../../../components/Footer';
    import Meta from '../../../partials/seo';
    
    
    export default function Home(props) {
        return (
        <div>
            <Meta 
            title="Quebec City lawn care services near me | We'll Take Care Of Everything" 
            desc="Quebec City lawn care services near me: t e"
            canonical={`${props.website}/quebec-city-lawn-care-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City lawn care services near me" //KW
            />
            <Header
            title="Quebec City lawn care services near me" //KW
            subtitle="t e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a  "
            image="/contractor.jpg"
            alt="Quebec City lawn care services near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City lawn care services near me" //KW
            desc="n u f t"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="p"
            cardDesc3=" "
            />
            <Approach
            title="Quebec City lawn care services near me" //KW
            desc="e t   e"
            />
            <Intro
            subtitle="Exceptional Quebec City lawn care services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="l  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="v"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        