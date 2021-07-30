
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
            title="Nashville lawn maintenance near me | We'll Take Care Of Everything" 
            desc="Nashville lawn maintenance near me: h h"
            canonical={`${props.website}/nashville-lawn-maintenance-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville lawn maintenance near me" //KW
            />
            <Header
            title="Nashville lawn maintenance near me" //KW
            subtitle="h h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o e"
            image="/window-installations.jpg"
            alt="Nashville lawn maintenance near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Nashville lawn maintenance near me" //KW
            desc="    e  "
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Nashville lawn maintenance near me" //KW
            desc="t o i i"
            />
            <Intro
            subtitle="Exceptional Nashville lawn maintenance near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="  a"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="w"
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
        