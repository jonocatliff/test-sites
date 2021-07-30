
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
            title="San Francisco new window installation | We'll Take Care Of Everything" 
            desc="San Francisco new window installation: f i"
            canonical={`${props.website}/san-francisco-new-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco new window installation" //KW
            />
            <Header
            title="San Francisco new window installation" //KW
            subtitle="f i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u c"
            image="/contractor.jpg"
            alt="San Francisco new window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Francisco new window installation" //KW
            desc="s k s w"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="s"
            cardDesc3="r"
            />
            <Approach
            title="San Francisco new window installation" //KW
            desc="t o i e"
            />
            <Intro
            subtitle="Exceptional San Francisco new window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="n  "
            cardDesc3="."
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
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
        