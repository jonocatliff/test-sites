
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
            title="Houston lawn care service | We'll Take Care Of Everything" 
            desc="Houston lawn care service: c  "
            canonical={`${props.website}/houston-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston lawn care service" //KW
            />
            <Header
            title="Houston lawn care service" //KW
            subtitle="c  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  a"
            image="/window-installation.jpg"
            alt="Houston lawn care service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Houston lawn care service" //KW
            desc="u n z d"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="I"
            cardDesc3="e"
            />
            <Approach
            title="Houston lawn care service" //KW
            desc="r m v h"
            />
            <Intro
            subtitle="Exceptional Houston lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="c l"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="w"
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
        