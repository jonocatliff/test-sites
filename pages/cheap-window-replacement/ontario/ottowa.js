
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
            title="Ottowa cheap window replacement | We'll Take Care Of Everything" 
            desc="Ottowa cheap window replacement: i o"
            canonical={`${props.website}/ottowa-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa cheap window replacement" //KW
            />
            <Header
            title="Ottowa cheap window replacement" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  e"
            image="/window-installations.jpg"
            alt="Ottowa cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Ottowa cheap window replacement" //KW
            desc="d i e e"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="c"
            cardDesc3="e"
            />
            <Approach
            title="Ottowa cheap window replacement" //KW
            desc="t u r o"
            />
            <Intro
            subtitle="Exceptional Ottowa cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="l h"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="w"
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
        