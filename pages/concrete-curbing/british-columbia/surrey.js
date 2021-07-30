
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
            title="Surrey concrete curbing | We'll Take Care Of Everything" 
            desc="Surrey concrete curbing: r W"
            canonical={`${props.website}/surrey-concrete-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey concrete curbing" //KW
            />
            <Header
            title="Surrey concrete curbing" //KW
            subtitle="r W"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w t"
            image="/window-installations.jpg"
            alt="Surrey concrete curbing"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Surrey concrete curbing" //KW
            desc="  s f h"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="m"
            cardDesc3="c"
            />
            <Approach
            title="Surrey concrete curbing" //KW
            desc="l h l a"
            />
            <Intro
            subtitle="Exceptional Surrey concrete curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="n  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="t"
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
        