
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
            title="Halifax hedge cutting services | We'll Take Care Of Everything" 
            desc="Halifax hedge cutting services: e  "
            canonical={`${props.website}/halifax-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax hedge cutting services" //KW
            />
            <Header
            title="Halifax hedge cutting services" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t o"
            image="/window-installations.jpg"
            alt="Halifax hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Halifax hedge cutting services" //KW
            desc="n A s  "
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="y"
            cardDesc3="g"
            />
            <Approach
            title="Halifax hedge cutting services" //KW
            desc="  l , o"
            />
            <Intro
            subtitle="Exceptional Halifax hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="t ,"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="a"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        