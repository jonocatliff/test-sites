
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
            title="Hamilton best lawn care service | We'll Take Care Of Everything" 
            desc="Hamilton best lawn care service: a m"
            canonical={`${props.website}/hamilton-best-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton best lawn care service" //KW
            />
            <Header
            title="Hamilton best lawn care service" //KW
            subtitle="a m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n h"
            image="/window-washing.jpg"
            alt="Hamilton best lawn care service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Hamilton best lawn care service" //KW
            desc="r r l w"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="u"
            />
            <Approach
            title="Hamilton best lawn care service" //KW
            desc="n b k  "
            />
            <Intro
            subtitle="Exceptional Hamilton best lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i i"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
            desc2="r"
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
        