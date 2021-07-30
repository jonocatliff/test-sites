
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
            title="Surrey vinyl window installation | We'll Take Care Of Everything" 
            desc="Surrey vinyl window installation: a t"
            canonical={`${props.website}/surrey-vinyl-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey vinyl window installation" //KW
            />
            <Header
            title="Surrey vinyl window installation" //KW
            subtitle="a t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s r"
            image="/window-installations.jpg"
            alt="Surrey vinyl window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Surrey vinyl window installation" //KW
            desc="n e m t"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="h"
            cardDesc3=" "
            />
            <Approach
            title="Surrey vinyl window installation" //KW
            desc=", o t  "
            />
            <Intro
            subtitle="Exceptional Surrey vinyl window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e f"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="d"
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
        