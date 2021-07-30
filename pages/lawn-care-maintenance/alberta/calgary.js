
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
            title="Calgary lawn care maintenance | We'll Take Care Of Everything" 
            desc="Calgary lawn care maintenance:   s"
            canonical={`${props.website}/calgary-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary lawn care maintenance" //KW
            />
            <Header
            title="Calgary lawn care maintenance" //KW
            subtitle="  s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="l g"
            image="/window-installation.jpg"
            alt="Calgary lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Calgary lawn care maintenance" //KW
            desc="l h .  "
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="o"
            cardDesc3="o"
            />
            <Approach
            title="Calgary lawn care maintenance" //KW
            desc="i y d e"
            />
            <Intro
            subtitle="Exceptional Calgary lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2=". i"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="I" //KW
            desc2=" "
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
        