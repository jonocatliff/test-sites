
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
            title="Washington DC window replacement near me | We'll Take Care Of Everything" 
            desc="Washington DC window replacement near me: o w"
            canonical={`${props.website}/washington-dc-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC window replacement near me" //KW
            />
            <Header
            title="Washington DC window replacement near me" //KW
            subtitle="o w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r '"
            image="/window-installation.jpg"
            alt="Washington DC window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Washington DC window replacement near me" //KW
            desc="s y . o"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Washington DC window replacement near me" //KW
            desc="l i u h"
            />
            <Intro
            subtitle="Exceptional Washington DC window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="."
            cardDesc2="u o"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2=" "
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
        