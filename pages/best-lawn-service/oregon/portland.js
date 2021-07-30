
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
            title="Portland best lawn service | We'll Take Care Of Everything" 
            desc="Portland best lawn service: a s"
            canonical={`${props.website}/portland-best-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland best lawn service" //KW
            />
            <Header
            title="Portland best lawn service" //KW
            subtitle="a s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="l  "
            image="/contractor.jpg"
            alt="Portland best lawn service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Portland best lawn service" //KW
            desc="c , m o"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="o"
            cardDesc3="s"
            />
            <Approach
            title="Portland best lawn service" //KW
            desc="g s   e"
            />
            <Intro
            subtitle="Exceptional Portland best lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="y"
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
        