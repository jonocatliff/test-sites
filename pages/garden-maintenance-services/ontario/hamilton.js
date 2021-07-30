
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
            title="Hamilton garden maintenance services | We'll Take Care Of Everything" 
            desc="Hamilton garden maintenance services: l w"
            canonical={`${props.website}/hamilton-garden-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton garden maintenance services" //KW
            />
            <Header
            title="Hamilton garden maintenance services" //KW
            subtitle="l w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o h"
            image="/window-installations.jpg"
            alt="Hamilton garden maintenance services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Hamilton garden maintenance services" //KW
            desc="  w s s"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="u"
            cardDesc3="r"
            />
            <Approach
            title="Hamilton garden maintenance services" //KW
            desc="       "
            />
            <Intro
            subtitle="Exceptional Hamilton garden maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="p l"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="i"
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
        