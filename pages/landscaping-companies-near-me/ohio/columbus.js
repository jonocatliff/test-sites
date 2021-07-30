
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
            title="Columbus landscaping companies near me | We'll Take Care Of Everything" 
            desc="Columbus landscaping companies near me: f s"
            canonical={`${props.website}/columbus-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus landscaping companies near me" //KW
            />
            <Header
            title="Columbus landscaping companies near me" //KW
            subtitle="f s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r a"
            image="/window-washing.jpg"
            alt="Columbus landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Columbus landscaping companies near me" //KW
            desc="o   h t"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2=" "
            cardDesc3="p"
            />
            <Approach
            title="Columbus landscaping companies near me" //KW
            desc="  o i  "
            />
            <Intro
            subtitle="Exceptional Columbus landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="v e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        