
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
            title="Fort Worth lawn spraying | We'll Take Care Of Everything" 
            desc="Fort Worth lawn spraying: c ."
            canonical={`${props.website}/fort-worth-lawn-spraying`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth lawn spraying" //KW
            />
            <Header
            title="Fort Worth lawn spraying" //KW
            subtitle="c ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i t"
            image="/window-installations.jpg"
            alt="Fort Worth lawn spraying"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Fort Worth lawn spraying" //KW
            desc="i l   o"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="c"
            cardDesc3="h"
            />
            <Approach
            title="Fort Worth lawn spraying" //KW
            desc="n l d k"
            />
            <Intro
            subtitle="Exceptional Fort Worth lawn spraying" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e s"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="h"
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
        