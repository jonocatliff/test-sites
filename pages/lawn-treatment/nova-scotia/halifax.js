
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
            title="Halifax lawn treatment | We'll Take Care Of Everything" 
            desc="Halifax lawn treatment: s t"
            canonical={`${props.website}/halifax-lawn-treatment`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax lawn treatment" //KW
            />
            <Header
            title="Halifax lawn treatment" //KW
            subtitle="s t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="y e"
            image="/window-washing.jpg"
            alt="Halifax lawn treatment"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Halifax lawn treatment" //KW
            desc=", a e s"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Halifax lawn treatment" //KW
            desc="s u   w"
            />
            <Intro
            subtitle="Exceptional Halifax lawn treatment" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="c a"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="'" //KW
            desc2="v"
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
        