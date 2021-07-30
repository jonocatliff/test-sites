
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
            title="New York City gardeners | We'll Take Care Of Everything" 
            desc="New York City gardeners: a t"
            canonical={`${props.website}/new-york-city-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City gardeners" //KW
            />
            <Header
            title="New York City gardeners" //KW
            subtitle="a t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="v o"
            image="/contractor.jpg"
            alt="New York City gardeners"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional New York City gardeners" //KW
            desc="  e f o"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="New York City gardeners" //KW
            desc="a , o o"
            />
            <Intro
            subtitle="Exceptional New York City gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="p w"
            cardDesc3=" "
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
        