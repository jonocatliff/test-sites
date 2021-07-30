
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
            title="Phoenix concrete curbing | We'll Take Care Of Everything" 
            desc="Phoenix concrete curbing: l s"
            canonical={`${props.website}/phoenix-concrete-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix concrete curbing" //KW
            />
            <Header
            title="Phoenix concrete curbing" //KW
            subtitle="l s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s r"
            image="/window-installations.jpg"
            alt="Phoenix concrete curbing"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Phoenix concrete curbing" //KW
            desc="s t e ."
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="n"
            cardDesc3="c"
            />
            <Approach
            title="Phoenix concrete curbing" //KW
            desc="r l e o"
            />
            <Intro
            subtitle="Exceptional Phoenix concrete curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="m o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="i"
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
        