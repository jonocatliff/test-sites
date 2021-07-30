
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
            title="Columbus garden landscape design | We'll Take Care Of Everything" 
            desc="Columbus garden landscape design: a y"
            canonical={`${props.website}/columbus-garden-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus garden landscape design" //KW
            />
            <Header
            title="Columbus garden landscape design" //KW
            subtitle="a y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n n"
            image="/window-installation.jpg"
            alt="Columbus garden landscape design"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus garden landscape design" //KW
            desc="       "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="u"
            cardDesc3="J"
            />
            <Approach
            title="Columbus garden landscape design" //KW
            desc="r r l e"
            />
            <Intro
            subtitle="Exceptional Columbus garden landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="i r"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="e"
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
        