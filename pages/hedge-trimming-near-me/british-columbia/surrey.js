
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
            title="Surrey hedge trimming near me | We'll Take Care Of Everything" 
            desc="Surrey hedge trimming near me: t h"
            canonical={`${props.website}/surrey-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey hedge trimming near me" //KW
            />
            <Header
            title="Surrey hedge trimming near me" //KW
            subtitle="t h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e  "
            image="/window-installation.jpg"
            alt="Surrey hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Surrey hedge trimming near me" //KW
            desc="d l o r"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="Surrey hedge trimming near me" //KW
            desc="o t i i"
            />
            <Intro
            subtitle="Exceptional Surrey hedge trimming near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o w"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
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
        