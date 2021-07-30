
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
            title="Boston window and door installation companies | We'll Take Care Of Everything" 
            desc="Boston window and door installation companies: t m"
            canonical={`${props.website}/boston-window-and-door-installation-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston window and door installation companies" //KW
            />
            <Header
            title="Boston window and door installation companies" //KW
            subtitle="t m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  r"
            image="/window-installation.jpg"
            alt="Boston window and door installation companies"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Boston window and door installation companies" //KW
            desc="o a   u"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Boston window and door installation companies" //KW
            desc="i h h c"
            />
            <Intro
            subtitle="Exceptional Boston window and door installation companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="r s"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="n"
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
        