
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
            title="Quebec City lawn service near me | We'll Take Care Of Everything" 
            desc="Quebec City lawn service near me: n y"
            canonical={`${props.website}/quebec-city-lawn-service-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City lawn service near me" //KW
            />
            <Header
            title="Quebec City lawn service near me" //KW
            subtitle="n y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i c"
            image="/window-installation.jpg"
            alt="Quebec City lawn service near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Quebec City lawn service near me" //KW
            desc="d   a o"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2=" "
            cardDesc3="p"
            />
            <Approach
            title="Quebec City lawn service near me" //KW
            desc="r a i t"
            />
            <Intro
            subtitle="Exceptional Quebec City lawn service near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2=". t"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="s"
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
        