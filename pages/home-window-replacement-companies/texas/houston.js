
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
            title="Houston home window replacement companies | We'll Take Care Of Everything" 
            desc="Houston home window replacement companies: o l"
            canonical={`${props.website}/houston-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston home window replacement companies" //KW
            />
            <Header
            title="Houston home window replacement companies" //KW
            subtitle="o l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d a"
            image="/contractor.jpg"
            alt="Houston home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Houston home window replacement companies" //KW
            desc="o t n m"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="d"
            cardDesc3="a"
            />
            <Approach
            title="Houston home window replacement companies" //KW
            desc="  d u  "
            />
            <Intro
            subtitle="Exceptional Houston home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="t v"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="h"
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
        