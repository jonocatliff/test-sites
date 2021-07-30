
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
            title="Denver lawn service near me | We'll Take Care Of Everything" 
            desc="Denver lawn service near me: i o"
            canonical={`${props.website}/denver-lawn-service-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver lawn service near me" //KW
            />
            <Header
            title="Denver lawn service near me" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="m a"
            image="/window-installations.jpg"
            alt="Denver lawn service near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Denver lawn service near me" //KW
            desc="l d c s"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2="e"
            cardDesc3="a"
            />
            <Approach
            title="Denver lawn service near me" //KW
            desc="e f x u"
            />
            <Intro
            subtitle="Exceptional Denver lawn service near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="a"
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
        