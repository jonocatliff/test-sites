
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
            title="Portland home landscaping | We'll Take Care Of Everything" 
            desc="Portland home landscaping: s y"
            canonical={`${props.website}/portland-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland home landscaping" //KW
            />
            <Header
            title="Portland home landscaping" //KW
            subtitle="s y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d h"
            image="/window-installations.jpg"
            alt="Portland home landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Portland home landscaping" //KW
            desc="n   i h"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="d"
            cardDesc3="n"
            />
            <Approach
            title="Portland home landscaping" //KW
            desc="y l e r"
            />
            <Intro
            subtitle="Exceptional Portland home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="i v"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
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
        