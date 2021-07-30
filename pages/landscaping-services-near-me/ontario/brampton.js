
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
            title="Brampton landscaping services near me | We'll Take Care Of Everything" 
            desc="Brampton landscaping services near me: d w"
            canonical={`${props.website}/brampton-landscaping-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton landscaping services near me" //KW
            />
            <Header
            title="Brampton landscaping services near me" //KW
            subtitle="d w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a h"
            image="/window-washing.jpg"
            alt="Brampton landscaping services near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Brampton landscaping services near me" //KW
            desc="i w o m"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="d"
            cardDesc3="I"
            />
            <Approach
            title="Brampton landscaping services near me" //KW
            desc="  r j c"
            />
            <Intro
            subtitle="Exceptional Brampton landscaping services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c v"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="n"
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
        