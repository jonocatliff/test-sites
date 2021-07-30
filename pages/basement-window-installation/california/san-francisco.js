
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
            title="San Francisco basement window installation | We'll Take Care Of Everything" 
            desc="San Francisco basement window installation: h t"
            canonical={`${props.website}/san-francisco-basement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco basement window installation" //KW
            />
            <Header
            title="San Francisco basement window installation" //KW
            subtitle="h t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="s d"
            image="/window-installations.jpg"
            alt="San Francisco basement window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Francisco basement window installation" //KW
            desc="  w    "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="San Francisco basement window installation" //KW
            desc="i n i  "
            />
            <Intro
            subtitle="Exceptional San Francisco basement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="  h"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="e"
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
        