
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
            title="Columbus hedge cutting services | We'll Take Care Of Everything" 
            desc="Columbus hedge cutting services: . e"
            canonical={`${props.website}/columbus-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus hedge cutting services" //KW
            />
            <Header
            title="Columbus hedge cutting services" //KW
            subtitle=". e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n n"
            image="/window-washing.jpg"
            alt="Columbus hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus hedge cutting services" //KW
            desc="  I w o"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Columbus hedge cutting services" //KW
            desc="n t t e"
            />
            <Intro
            subtitle="Exceptional Columbus hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="n w"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="h"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        