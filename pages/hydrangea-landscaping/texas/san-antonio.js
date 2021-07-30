
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
            title="San Antonio hydrangea landscaping | We'll Take Care Of Everything" 
            desc="San Antonio hydrangea landscaping: u h"
            canonical={`${props.website}/san-antonio-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio hydrangea landscaping" //KW
            />
            <Header
            title="San Antonio hydrangea landscaping" //KW
            subtitle="u h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s y"
            image="/contractor.jpg"
            alt="San Antonio hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Antonio hydrangea landscaping" //KW
            desc="n   h p"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="b"
            cardDesc3=" "
            />
            <Approach
            title="San Antonio hydrangea landscaping" //KW
            desc="e r e  "
            />
            <Intro
            subtitle="Exceptional San Antonio hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="a s"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2=" "
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
        