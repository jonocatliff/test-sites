
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
            title="Jacksonville house window replacement near me | We'll Take Care Of Everything" 
            desc="Jacksonville house window replacement near me: e m"
            canonical={`${props.website}/jacksonville-house-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville house window replacement near me" //KW
            />
            <Header
            title="Jacksonville house window replacement near me" //KW
            subtitle="e m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r e"
            image="/contractor.jpg"
            alt="Jacksonville house window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Jacksonville house window replacement near me" //KW
            desc=". t i s"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="b"
            cardDesc3="u"
            />
            <Approach
            title="Jacksonville house window replacement near me" //KW
            desc="n d h p"
            />
            <Intro
            subtitle="Exceptional Jacksonville house window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="s o"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="i"
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
        