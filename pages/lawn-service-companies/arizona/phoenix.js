
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
            title="Phoenix lawn service companies | We'll Take Care Of Everything" 
            desc="Phoenix lawn service companies: c a"
            canonical={`${props.website}/phoenix-lawn-service-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix lawn service companies" //KW
            />
            <Header
            title="Phoenix lawn service companies" //KW
            subtitle="c a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d h"
            image="/window-installation.jpg"
            alt="Phoenix lawn service companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Phoenix lawn service companies" //KW
            desc="e r m l"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="w"
            cardDesc3="h"
            />
            <Approach
            title="Phoenix lawn service companies" //KW
            desc="  c v r"
            />
            <Intro
            subtitle="Exceptional Phoenix lawn service companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="g v"
            cardDesc3="O"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="o"
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
        