
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
            title="Jacksonville front garden landscaping | We'll Take Care Of Everything" 
            desc="Jacksonville front garden landscaping: o d"
            canonical={`${props.website}/jacksonville-front-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville front garden landscaping" //KW
            />
            <Header
            title="Jacksonville front garden landscaping" //KW
            subtitle="o d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e i"
            image="/window-washing.jpg"
            alt="Jacksonville front garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Jacksonville front garden landscaping" //KW
            desc="i l t e"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="I"
            cardDesc3="o"
            />
            <Approach
            title="Jacksonville front garden landscaping" //KW
            desc="p o o h"
            />
            <Intro
            subtitle="Exceptional Jacksonville front garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r c"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2=","
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
        