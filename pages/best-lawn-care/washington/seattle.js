
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
            title="Seattle best lawn care | We'll Take Care Of Everything" 
            desc="Seattle best lawn care: o o"
            canonical={`${props.website}/seattle-best-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle best lawn care" //KW
            />
            <Header
            title="Seattle best lawn care" //KW
            subtitle="o o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="f d"
            image="/window-washing.jpg"
            alt="Seattle best lawn care"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Seattle best lawn care" //KW
            desc="t   p y"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="l"
            cardDesc3="t"
            />
            <Approach
            title="Seattle best lawn care" //KW
            desc="o e e r"
            />
            <Intro
            subtitle="Exceptional Seattle best lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="l  "
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="s"
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
        