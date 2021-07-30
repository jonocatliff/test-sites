
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
            title="Hamilton lawn service | We'll Take Care Of Everything" 
            desc="Hamilton lawn service: e o"
            canonical={`${props.website}/hamilton-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn service" //KW
            />
            <Header
            title="Hamilton lawn service" //KW
            subtitle="e o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e e"
            image="/window-installations.jpg"
            alt="Hamilton lawn service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Hamilton lawn service" //KW
            desc="d l n o"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="n"
            cardDesc3="v"
            />
            <Approach
            title="Hamilton lawn service" //KW
            desc="  l t v"
            />
            <Intro
            subtitle="Exceptional Hamilton lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  n"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="s"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        