
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
            title="San Diego lawn mowing near me | We'll Take Care Of Everything" 
            desc="San Diego lawn mowing near me: s d"
            canonical={`${props.website}/san-diego-lawn-mowing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego lawn mowing near me" //KW
            />
            <Header
            title="San Diego lawn mowing near me" //KW
            subtitle="s d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="v e"
            image="/window-washing.jpg"
            alt="San Diego lawn mowing near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Diego lawn mowing near me" //KW
            desc="g k d t"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="s"
            cardDesc3="a"
            />
            <Approach
            title="San Diego lawn mowing near me" //KW
            desc="  o t h"
            />
            <Intro
            subtitle="Exceptional San Diego lawn mowing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i d"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="A"
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
        