
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
            title="Columbus landscaping contractors | We'll Take Care Of Everything" 
            desc="Columbus landscaping contractors: i y"
            canonical={`${props.website}/columbus-landscaping-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus landscaping contractors" //KW
            />
            <Header
            title="Columbus landscaping contractors" //KW
            subtitle="i y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e  "
            image="/window-installation.jpg"
            alt="Columbus landscaping contractors"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Columbus landscaping contractors" //KW
            desc="n w o  "
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Columbus landscaping contractors" //KW
            desc="  t d  "
            />
            <Intro
            subtitle="Exceptional Columbus landscaping contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e s"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        