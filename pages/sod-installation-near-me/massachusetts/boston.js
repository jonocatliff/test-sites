
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
            title="Boston sod installation near me | We'll Take Care Of Everything" 
            desc="Boston sod installation near me: i e"
            canonical={`${props.website}/boston-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston sod installation near me" //KW
            />
            <Header
            title="Boston sod installation near me" //KW
            subtitle="i e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="u n"
            image="/window-washing.jpg"
            alt="Boston sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Boston sod installation near me" //KW
            desc="e e r undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="Boston sod installation near me" //KW
            desc="    t t"
            />
            <Intro
            subtitle="Exceptional Boston sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e undefined"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="v"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        