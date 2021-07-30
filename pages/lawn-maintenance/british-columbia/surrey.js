
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
            title="Surrey lawn maintenance | We'll Take Care Of Everything" 
            desc="Surrey lawn maintenance: n e"
            canonical={`${props.website}/surrey-lawn-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey lawn maintenance" //KW
            />
            <Header
            title="Surrey lawn maintenance" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="h f"
            image="/window-installations.jpg"
            alt="Surrey lawn maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey lawn maintenance" //KW
            desc="  g y e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3="c"
            />
            <Approach
            title="Surrey lawn maintenance" //KW
            desc="A h   o"
            />
            <Intro
            subtitle="Exceptional Surrey lawn maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="n i"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="r"
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
        