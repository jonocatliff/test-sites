
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
            title="Winnipeg concrete curbing near me | We'll Take Care Of Everything" 
            desc="Winnipeg concrete curbing near me: f i"
            canonical={`${props.website}/winnipeg-concrete-curbing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg concrete curbing near me" //KW
            />
            <Header
            title="Winnipeg concrete curbing near me" //KW
            subtitle="f i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i e"
            image="/window-washing.jpg"
            alt="Winnipeg concrete curbing near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Winnipeg concrete curbing near me" //KW
            desc="h e e s"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="e"
            cardDesc3="d"
            />
            <Approach
            title="Winnipeg concrete curbing near me" //KW
            desc="y e   a"
            />
            <Intro
            subtitle="Exceptional Winnipeg concrete curbing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="m c"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
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
        