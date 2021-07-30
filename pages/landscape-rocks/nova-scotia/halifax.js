
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
            title="Halifax landscape rocks | We'll Take Care Of Everything" 
            desc="Halifax landscape rocks: v s"
            canonical={`${props.website}/halifax-landscape-rocks`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax landscape rocks" //KW
            />
            <Header
            title="Halifax landscape rocks" //KW
            subtitle="v s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n e"
            image="/window-installation.jpg"
            alt="Halifax landscape rocks"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Halifax landscape rocks" //KW
            desc="c     i"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="i"
            cardDesc3="r"
            />
            <Approach
            title="Halifax landscape rocks" //KW
            desc="t s x h"
            />
            <Intro
            subtitle="Exceptional Halifax landscape rocks" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="l o"
            cardDesc3="e"
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
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        