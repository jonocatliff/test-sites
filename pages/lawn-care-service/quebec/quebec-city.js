
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
            title="Quebec City lawn care service | We'll Take Care Of Everything" 
            desc="Quebec City lawn care service: u  "
            canonical={`${props.website}/quebec-city-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City lawn care service" //KW
            />
            <Header
            title="Quebec City lawn care service" //KW
            subtitle="u  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r u"
            image="/window-installation.jpg"
            alt="Quebec City lawn care service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Quebec City lawn care service" //KW
            desc=", , o x"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="l"
            cardDesc3="e"
            />
            <Approach
            title="Quebec City lawn care service" //KW
            desc="o   s ."
            />
            <Intro
            subtitle="Exceptional Quebec City lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  s"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="f" //KW
            desc2="v"
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
        