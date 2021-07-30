
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
            title="San Diego landscaping services near me | We'll Take Care Of Everything" 
            desc="San Diego landscaping services near me: e e"
            canonical={`${props.website}/san-diego-landscaping-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego landscaping services near me" //KW
            />
            <Header
            title="San Diego landscaping services near me" //KW
            subtitle="e e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="f s"
            image="/contractor.jpg"
            alt="San Diego landscaping services near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Diego landscaping services near me" //KW
            desc="  t o i"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="t"
            cardDesc3="h"
            />
            <Approach
            title="San Diego landscaping services near me" //KW
            desc="n o h n"
            />
            <Intro
            subtitle="Exceptional San Diego landscaping services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p s"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="I" //KW
            desc2="p"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        