
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
            title="Washington DC install replacement windows | We'll Take Care Of Everything" 
            desc="Washington DC install replacement windows:   t"
            canonical={`${props.website}/washington-dc-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC install replacement windows" //KW
            />
            <Header
            title="Washington DC install replacement windows" //KW
            subtitle="  t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a o"
            image="/contractor.jpg"
            alt="Washington DC install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Washington DC install replacement windows" //KW
            desc="c d   i"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="r"
            cardDesc3="o"
            />
            <Approach
            title="Washington DC install replacement windows" //KW
            desc=". a   h"
            />
            <Intro
            subtitle="Exceptional Washington DC install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="d  "
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="r"
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
        