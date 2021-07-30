
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
            title="Detroit glass installation | We'll Take Care Of Everything" 
            desc="Detroit glass installation: l h"
            canonical={`${props.website}/detroit-glass-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit glass installation" //KW
            />
            <Header
            title="Detroit glass installation" //KW
            subtitle="l h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="l e"
            image="/window-installations.jpg"
            alt="Detroit glass installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Detroit glass installation" //KW
            desc="l t    "
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="t"
            cardDesc3="e"
            />
            <Approach
            title="Detroit glass installation" //KW
            desc="f y d c"
            />
            <Intro
            subtitle="Exceptional Detroit glass installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="o  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="e"
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
        