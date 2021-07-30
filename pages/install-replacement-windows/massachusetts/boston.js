
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
            title="Boston install replacement windows | We'll Take Care Of Everything" 
            desc="Boston install replacement windows: w a"
            canonical={`${props.website}/boston-install-replacement-windows`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston install replacement windows" //KW
            />
            <Header
            title="Boston install replacement windows" //KW
            subtitle="w a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i p"
            image="/window-installation.jpg"
            alt="Boston install replacement windows"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Boston install replacement windows" //KW
            desc="e s i s"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2=" "
            cardDesc3="f"
            />
            <Approach
            title="Boston install replacement windows" //KW
            desc="A t n  "
            />
            <Intro
            subtitle="Exceptional Boston install replacement windows" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o f"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="s"
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
        