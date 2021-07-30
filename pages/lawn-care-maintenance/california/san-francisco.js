
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
            title="San Francisco lawn care maintenance | We'll Take Care Of Everything" 
            desc="San Francisco lawn care maintenance: n a"
            canonical={`${props.website}/san-francisco-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco lawn care maintenance" //KW
            />
            <Header
            title="San Francisco lawn care maintenance" //KW
            subtitle="n a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="v e"
            image="/window-installations.jpg"
            alt="San Francisco lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Francisco lawn care maintenance" //KW
            desc="a a   e"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="i"
            cardDesc3="h"
            />
            <Approach
            title="San Francisco lawn care maintenance" //KW
            desc="n l h e"
            />
            <Intro
            subtitle="Exceptional San Francisco lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="P w"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
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
        