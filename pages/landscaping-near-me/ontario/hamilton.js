
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
            title="Hamilton landscaping near me | We'll Take Care Of Everything" 
            desc="Hamilton landscaping near me: n t"
            canonical={`${props.website}/hamilton-landscaping-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton landscaping near me" //KW
            />
            <Header
            title="Hamilton landscaping near me" //KW
            subtitle="n t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s h"
            image="/window-installation.jpg"
            alt="Hamilton landscaping near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Hamilton landscaping near me" //KW
            desc="e   e s"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="w"
            cardDesc3="i"
            />
            <Approach
            title="Hamilton landscaping near me" //KW
            desc="  y t y"
            />
            <Intro
            subtitle="Exceptional Hamilton landscaping near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e s"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        