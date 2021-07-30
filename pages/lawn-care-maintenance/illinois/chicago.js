
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
            title="Chicago lawn care maintenance | We'll Take Care Of Everything" 
            desc="Chicago lawn care maintenance: d t"
            canonical={`${props.website}/chicago-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago lawn care maintenance" //KW
            />
            <Header
            title="Chicago lawn care maintenance" //KW
            subtitle="d t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a e"
            image="/window-installation.jpg"
            alt="Chicago lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Chicago lawn care maintenance" //KW
            desc="n l   i"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="e"
            cardDesc3="h"
            />
            <Approach
            title="Chicago lawn care maintenance" //KW
            desc="  o T v"
            />
            <Intro
            subtitle="Exceptional Chicago lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="W h"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="a"
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
        