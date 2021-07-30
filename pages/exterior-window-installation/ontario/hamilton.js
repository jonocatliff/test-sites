
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
            title="Hamilton exterior window installation | We'll Take Care Of Everything" 
            desc="Hamilton exterior window installation: t i"
            canonical={`${props.website}/hamilton-exterior-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton exterior window installation" //KW
            />
            <Header
            title="Hamilton exterior window installation" //KW
            subtitle="t i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e l"
            image="/window-installations.jpg"
            alt="Hamilton exterior window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Hamilton exterior window installation" //KW
            desc="i   i r"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="Hamilton exterior window installation" //KW
            desc="t s   n"
            />
            <Intro
            subtitle="Exceptional Hamilton exterior window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="s h"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="n"
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
        