
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
            title="Jacksonville lawn care maintenance | We'll Take Care Of Everything" 
            desc="Jacksonville lawn care maintenance: a w"
            canonical={`${props.website}/jacksonville-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville lawn care maintenance" //KW
            />
            <Header
            title="Jacksonville lawn care maintenance" //KW
            subtitle="a w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r h"
            image="/window-installations.jpg"
            alt="Jacksonville lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Jacksonville lawn care maintenance" //KW
            desc="t t w n"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="Jacksonville lawn care maintenance" //KW
            desc="n b t h"
            />
            <Intro
            subtitle="Exceptional Jacksonville lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="n  "
            cardDesc3="A"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="i"
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
        