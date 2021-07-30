
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
            title="San Diego window and door installation companies | We'll Take Care Of Everything" 
            desc="San Diego window and door installation companies:   e"
            canonical={`${props.website}/san-diego-window-and-door-installation-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego window and door installation companies" //KW
            />
            <Header
            title="San Diego window and door installation companies" //KW
            subtitle="  e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  a"
            image="/window-installations.jpg"
            alt="San Diego window and door installation companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Diego window and door installation companies" //KW
            desc="p     a"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="San Diego window and door installation companies" //KW
            desc="s o r h"
            />
            <Intro
            subtitle="Exceptional San Diego window and door installation companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n f"
            cardDesc3="A"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="c"
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
        