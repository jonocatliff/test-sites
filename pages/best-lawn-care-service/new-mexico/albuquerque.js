
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
            title="Albuquerque best lawn care service | We'll Take Care Of Everything" 
            desc="Albuquerque best lawn care service: i e"
            canonical={`${props.website}/albuquerque-best-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque best lawn care service" //KW
            />
            <Header
            title="Albuquerque best lawn care service" //KW
            subtitle="i e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="   "
            image="/window-installation.jpg"
            alt="Albuquerque best lawn care service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Albuquerque best lawn care service" //KW
            desc="s   w  "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="p"
            cardDesc3="l"
            />
            <Approach
            title="Albuquerque best lawn care service" //KW
            desc="e o e e"
            />
            <Intro
            subtitle="Exceptional Albuquerque best lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a s"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="n"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        