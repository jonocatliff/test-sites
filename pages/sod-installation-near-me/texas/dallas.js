
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
            title="Dallas sod installation near me | We'll Take Care Of Everything" 
            desc="Dallas sod installation near me: n  "
            canonical={`${props.website}/dallas-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas sod installation near me" //KW
            />
            <Header
            title="Dallas sod installation near me" //KW
            subtitle="n  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s d"
            image="/window-washing.jpg"
            alt="Dallas sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Dallas sod installation near me" //KW
            desc="w e d undefined"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3="h"
            />
            <Approach
            title="Dallas sod installation near me" //KW
            desc="u r a g"
            />
            <Intro
            subtitle="Exceptional Dallas sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u undefined"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="o"
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
        