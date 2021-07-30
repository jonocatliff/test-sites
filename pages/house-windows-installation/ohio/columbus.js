
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
            title="Columbus house windows installation | We'll Take Care Of Everything" 
            desc="Columbus house windows installation: n W"
            canonical={`${props.website}/columbus-house-windows-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus house windows installation" //KW
            />
            <Header
            title="Columbus house windows installation" //KW
            subtitle="n W"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="n  "
            image="/contractor.jpg"
            alt="Columbus house windows installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus house windows installation" //KW
            desc="i o d p"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="q"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="e"
            cardDesc3="h"
            />
            <Approach
            title="Columbus house windows installation" //KW
            desc="u a d  "
            />
            <Intro
            subtitle="Exceptional Columbus house windows installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="o w"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="n"
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
        