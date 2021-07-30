
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
            title="Hamilton landscaping services near me | We'll Take Care Of Everything" 
            desc="Hamilton landscaping services near me: t g"
            canonical={`${props.website}/hamilton-landscaping-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton landscaping services near me" //KW
            />
            <Header
            title="Hamilton landscaping services near me" //KW
            subtitle="t g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="d i"
            image="/window-installations.jpg"
            alt="Hamilton landscaping services near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Hamilton landscaping services near me" //KW
            desc="o d i ."
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="g"
            cardDesc3=" "
            />
            <Approach
            title="Hamilton landscaping services near me" //KW
            desc="  s   l"
            />
            <Intro
            subtitle="Exceptional Hamilton landscaping services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="t e"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="W" //KW
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
        