
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
            title="Austin lawn service | We'll Take Care Of Everything" 
            desc="Austin lawn service: h h"
            canonical={`${props.website}/austin-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin lawn service" //KW
            />
            <Header
            title="Austin lawn service" //KW
            subtitle="h h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n  "
            image="/window-installations.jpg"
            alt="Austin lawn service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Austin lawn service" //KW
            desc="t u f  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="o"
            cardDesc3=","
            />
            <Approach
            title="Austin lawn service" //KW
            desc="  i e o"
            />
            <Intro
            subtitle="Exceptional Austin lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p  "
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="p"
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
        