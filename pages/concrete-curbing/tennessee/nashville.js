
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
            title="Nashville concrete curbing | We'll Take Care Of Everything" 
            desc="Nashville concrete curbing: f h"
            canonical={`${props.website}/nashville-concrete-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville concrete curbing" //KW
            />
            <Header
            title="Nashville concrete curbing" //KW
            subtitle="f h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e t"
            image="/contractor.jpg"
            alt="Nashville concrete curbing"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Nashville concrete curbing" //KW
            desc="l n o  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Nashville concrete curbing" //KW
            desc="e   . v"
            />
            <Intro
            subtitle="Exceptional Nashville concrete curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="g t"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="g"
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
        