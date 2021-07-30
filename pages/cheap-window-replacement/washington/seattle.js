
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
            title="Seattle cheap window replacement | We'll Take Care Of Everything" 
            desc="Seattle cheap window replacement: o o"
            canonical={`${props.website}/seattle-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle cheap window replacement" //KW
            />
            <Header
            title="Seattle cheap window replacement" //KW
            subtitle="o o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="l o"
            image="/window-installation.jpg"
            alt="Seattle cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Seattle cheap window replacement" //KW
            desc="v   n m"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="s"
            />
            <Approach
            title="Seattle cheap window replacement" //KW
            desc="i o n h"
            />
            <Intro
            subtitle="Exceptional Seattle cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="s  "
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="o"
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
        