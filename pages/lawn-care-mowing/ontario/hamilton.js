
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
            title="Hamilton lawn care mowing | We'll Take Care Of Everything" 
            desc="Hamilton lawn care mowing: t a"
            canonical={`${props.website}/hamilton-lawn-care-mowing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn care mowing" //KW
            />
            <Header
            title="Hamilton lawn care mowing" //KW
            subtitle="t a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s i"
            image="/window-washing.jpg"
            alt="Hamilton lawn care mowing"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Hamilton lawn care mowing" //KW
            desc="u y a a"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="c"
            cardDesc3="h"
            />
            <Approach
            title="Hamilton lawn care mowing" //KW
            desc="n   s a"
            />
            <Intro
            subtitle="Exceptional Hamilton lawn care mowing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n  "
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="a"
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
        