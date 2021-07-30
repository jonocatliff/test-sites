
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
            title="Washington DC lawn weed control service | We'll Take Care Of Everything" 
            desc="Washington DC lawn weed control service: w w"
            canonical={`${props.website}/washington-dc-lawn-weed-control-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC lawn weed control service" //KW
            />
            <Header
            title="Washington DC lawn weed control service" //KW
            subtitle="w w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t  "
            image="/window-installation.jpg"
            alt="Washington DC lawn weed control service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Washington DC lawn weed control service" //KW
            desc="u e s c"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3="f"
            />
            <Approach
            title="Washington DC lawn weed control service" //KW
            desc="l     h"
            />
            <Intro
            subtitle="Exceptional Washington DC lawn weed control service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="x s"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="u"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        