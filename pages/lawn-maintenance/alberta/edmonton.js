
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
            title="Edmonton lawn maintenance | We'll Take Care Of Everything" 
            desc="Edmonton lawn maintenance: t n"
            canonical={`${props.website}/edmonton-lawn-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton lawn maintenance" //KW
            />
            <Header
            title="Edmonton lawn maintenance" //KW
            subtitle="t n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o n"
            image="/window-installation.jpg"
            alt="Edmonton lawn maintenance"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Edmonton lawn maintenance" //KW
            desc="d y e d"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Edmonton lawn maintenance" //KW
            desc="a o n l"
            />
            <Intro
            subtitle="Exceptional Edmonton lawn maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="l o"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2=","
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
        