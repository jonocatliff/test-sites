
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
            title="Louisville window installation near me | We'll Take Care Of Everything" 
            desc="Louisville window installation near me: a i"
            canonical={`${props.website}/louisville-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville window installation near me" //KW
            />
            <Header
            title="Louisville window installation near me" //KW
            subtitle="a i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t e"
            image="/window-installation.jpg"
            alt="Louisville window installation near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville window installation near me" //KW
            desc="l , f h"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="p"
            cardDesc3="t"
            />
            <Approach
            title="Louisville window installation near me" //KW
            desc="n   s f"
            />
            <Intro
            subtitle="Exceptional Louisville window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="u s"
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
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        