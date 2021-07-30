
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
            title="Indianapolis lawn maintenance services | We'll Take Care Of Everything" 
            desc="Indianapolis lawn maintenance services: e h"
            canonical={`${props.website}/indianapolis-lawn-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis lawn maintenance services" //KW
            />
            <Header
            title="Indianapolis lawn maintenance services" //KW
            subtitle="e h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r e"
            image="/window-installations.jpg"
            alt="Indianapolis lawn maintenance services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Indianapolis lawn maintenance services" //KW
            desc="u n o  "
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="w"
            cardDesc3="e"
            />
            <Approach
            title="Indianapolis lawn maintenance services" //KW
            desc="t i o h"
            />
            <Intro
            subtitle="Exceptional Indianapolis lawn maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="  p"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="l"
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
        