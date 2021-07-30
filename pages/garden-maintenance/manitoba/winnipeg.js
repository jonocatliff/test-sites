
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
            title="Winnipeg garden maintenance | We'll Take Care Of Everything" 
            desc="Winnipeg garden maintenance:   l"
            canonical={`${props.website}/winnipeg-garden-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg garden maintenance" //KW
            />
            <Header
            title="Winnipeg garden maintenance" //KW
            subtitle="  l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e f"
            image="/window-installation.jpg"
            alt="Winnipeg garden maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Winnipeg garden maintenance" //KW
            desc="v o e r"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="a"
            cardDesc3=" "
            />
            <Approach
            title="Winnipeg garden maintenance" //KW
            desc="r s n h"
            />
            <Intro
            subtitle="Exceptional Winnipeg garden maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="s s"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="n"
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
        