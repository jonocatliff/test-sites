
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
            title="Memphis grass treatment for weeds | We'll Take Care Of Everything" 
            desc="Memphis grass treatment for weeds:   o"
            canonical={`${props.website}/memphis-grass-treatment-for-weeds`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis grass treatment for weeds" //KW
            />
            <Header
            title="Memphis grass treatment for weeds" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="d e"
            image="/window-installation.jpg"
            alt="Memphis grass treatment for weeds"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Memphis grass treatment for weeds" //KW
            desc="t t r e"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="e"
            cardDesc3="r"
            />
            <Approach
            title="Memphis grass treatment for weeds" //KW
            desc="s - w v"
            />
            <Intro
            subtitle="Exceptional Memphis grass treatment for weeds" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="  s"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="l"
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
        