
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
            title="Indianapolis lawn care service | We'll Take Care Of Everything" 
            desc="Indianapolis lawn care service: o g"
            canonical={`${props.website}/indianapolis-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis lawn care service" //KW
            />
            <Header
            title="Indianapolis lawn care service" //KW
            subtitle="o g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e i"
            image="/window-installation.jpg"
            alt="Indianapolis lawn care service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Indianapolis lawn care service" //KW
            desc="e   e t"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="o"
            cardDesc3="n"
            />
            <Approach
            title="Indianapolis lawn care service" //KW
            desc="t e   a"
            />
            <Intro
            subtitle="Exceptional Indianapolis lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="r o"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="s"
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
        