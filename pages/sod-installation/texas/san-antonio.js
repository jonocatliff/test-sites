
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
            title="San Antonio sod installation | We'll Take Care Of Everything" 
            desc="San Antonio sod installation: c t"
            canonical={`${props.website}/san-antonio-sod-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio sod installation" //KW
            />
            <Header
            title="San Antonio sod installation" //KW
            subtitle="c t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n  "
            image="/window-installation.jpg"
            alt="San Antonio sod installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Antonio sod installation" //KW
            desc="t w t undefined"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="r"
            cardDesc3="l"
            />
            <Approach
            title="San Antonio sod installation" //KW
            desc="  o y  "
            />
            <Intro
            subtitle="Exceptional San Antonio sod installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="s undefined"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="h"
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
        