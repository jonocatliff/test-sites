
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
            title="Seattle best lawn care service | We'll Take Care Of Everything" 
            desc="Seattle best lawn care service: i s"
            canonical={`${props.website}/seattle-best-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle best lawn care service" //KW
            />
            <Header
            title="Seattle best lawn care service" //KW
            subtitle="i s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  v"
            image="/window-installation.jpg"
            alt="Seattle best lawn care service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Seattle best lawn care service" //KW
            desc="t f r t"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="g"
            cardDesc3=" "
            />
            <Approach
            title="Seattle best lawn care service" //KW
            desc="a   s g"
            />
            <Intro
            subtitle="Exceptional Seattle best lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="m f"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="w"
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
        