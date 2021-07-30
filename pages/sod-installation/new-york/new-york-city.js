
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
            title="New York City sod installation | We'll Take Care Of Everything" 
            desc="New York City sod installation: m n"
            canonical={`${props.website}/new-york-city-sod-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City sod installation" //KW
            />
            <Header
            title="New York City sod installation" //KW
            subtitle="m n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  e"
            image="/window-washing.jpg"
            alt="New York City sod installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional New York City sod installation" //KW
            desc="n a o undefined"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="l"
            cardDesc3="h"
            />
            <Approach
            title="New York City sod installation" //KW
            desc="o p i s"
            />
            <Intro
            subtitle="Exceptional New York City sod installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="s undefined"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2=" "
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
        