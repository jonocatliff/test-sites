
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
            title="Quebec City window and door installation companies | We'll Take Care Of Everything" 
            desc="Quebec City window and door installation companies: n  "
            canonical={`${props.website}/quebec-city-window-and-door-installation-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City window and door installation companies" //KW
            />
            <Header
            title="Quebec City window and door installation companies" //KW
            subtitle="n  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w t"
            image="/window-washing.jpg"
            alt="Quebec City window and door installation companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Quebec City window and door installation companies" //KW
            desc="n l   h"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="e"
            cardDesc3="p"
            />
            <Approach
            title="Quebec City window and door installation companies" //KW
            desc="  e i i"
            />
            <Intro
            subtitle="Exceptional Quebec City window and door installation companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="v e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="r"
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
        