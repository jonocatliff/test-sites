
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
            title="Memphis yard care | We'll Take Care Of Everything" 
            desc="Memphis yard care: t s"
            canonical={`${props.website}/memphis-yard-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis yard care" //KW
            />
            <Header
            title="Memphis yard care" //KW
            subtitle="t s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a  "
            image="/window-installation.jpg"
            alt="Memphis yard care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Memphis yard care" //KW
            desc="  t o undefined"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="d"
            cardDesc3="h"
            />
            <Approach
            title="Memphis yard care" //KW
            desc="d i r b"
            />
            <Intro
            subtitle="Exceptional Memphis yard care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="f undefined"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="p"
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
        