
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
            title="Brampton cheap window replacement | We'll Take Care Of Everything" 
            desc="Brampton cheap window replacement: t n"
            canonical={`${props.website}/brampton-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton cheap window replacement" //KW
            />
            <Header
            title="Brampton cheap window replacement" //KW
            subtitle="t n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o h"
            image="/window-installation.jpg"
            alt="Brampton cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Brampton cheap window replacement" //KW
            desc="c   e i"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="o"
            cardDesc3="h"
            />
            <Approach
            title="Brampton cheap window replacement" //KW
            desc="  e    "
            />
            <Intro
            subtitle="Exceptional Brampton cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="n  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="I" //KW
            desc2="e"
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
        