
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
            title="Fort Worth best lawn care | We'll Take Care Of Everything" 
            desc="Fort Worth best lawn care:    "
            canonical={`${props.website}/fort-worth-best-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth best lawn care" //KW
            />
            <Header
            title="Fort Worth best lawn care" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  a"
            image="/window-washing.jpg"
            alt="Fort Worth best lawn care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Fort Worth best lawn care" //KW
            desc="w A e h"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="w"
            cardDesc3="r"
            />
            <Approach
            title="Fort Worth best lawn care" //KW
            desc="  f t f"
            />
            <Intro
            subtitle="Exceptional Fort Worth best lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="m o"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="o"
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
        