
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
            title="Portland lawn maintenance near me | We'll Take Care Of Everything" 
            desc="Portland lawn maintenance near me: a ."
            canonical={`${props.website}/portland-lawn-maintenance-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland lawn maintenance near me" //KW
            />
            <Header
            title="Portland lawn maintenance near me" //KW
            subtitle="a ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w  "
            image="/window-installation.jpg"
            alt="Portland lawn maintenance near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Portland lawn maintenance near me" //KW
            desc="e s s a"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="p"
            cardDesc3="t"
            />
            <Approach
            title="Portland lawn maintenance near me" //KW
            desc="o n t s"
            />
            <Intro
            subtitle="Exceptional Portland lawn maintenance near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="t r"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="s"
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
        