
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
            title="Phoenix hedge cutting | We'll Take Care Of Everything" 
            desc="Phoenix hedge cutting: w a"
            canonical={`${props.website}/phoenix-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix hedge cutting" //KW
            />
            <Header
            title="Phoenix hedge cutting" //KW
            subtitle="w a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="l r"
            image="/contractor.jpg"
            alt="Phoenix hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Phoenix hedge cutting" //KW
            desc="n s e h"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="P"
            cardDesc3="w"
            />
            <Approach
            title="Phoenix hedge cutting" //KW
            desc="g a   c"
            />
            <Intro
            subtitle="Exceptional Phoenix hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="f  "
            cardDesc3="d"
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
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        