
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
            title="Nashville install replacement windows | We'll Take Care Of Everything" 
            desc="Nashville install replacement windows: n e"
            canonical={`${props.website}/nashville-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville install replacement windows" //KW
            />
            <Header
            title="Nashville install replacement windows" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  e"
            image="/window-installation.jpg"
            alt="Nashville install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Nashville install replacement windows" //KW
            desc="p   n i"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="i"
            cardDesc3="w"
            />
            <Approach
            title="Nashville install replacement windows" //KW
            desc="  a e o"
            />
            <Intro
            subtitle="Exceptional Nashville install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="I n"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="c"
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
        