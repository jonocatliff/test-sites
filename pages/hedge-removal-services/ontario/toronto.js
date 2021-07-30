
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
            title="Toronto hedge removal services | We'll Take Care Of Everything" 
            desc="Toronto hedge removal services: p u"
            canonical={`${props.website}/toronto-hedge-removal-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto hedge removal services" //KW
            />
            <Header
            title="Toronto hedge removal services" //KW
            subtitle="p u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d e"
            image="/window-washing.jpg"
            alt="Toronto hedge removal services"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Toronto hedge removal services" //KW
            desc="e l l t"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="w"
            cardDesc3="P"
            />
            <Approach
            title="Toronto hedge removal services" //KW
            desc="w a e h"
            />
            <Intro
            subtitle="Exceptional Toronto hedge removal services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="d s"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="c"
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
        