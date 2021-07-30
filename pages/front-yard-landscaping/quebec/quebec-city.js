
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
            title="Quebec City front yard landscaping | We'll Take Care Of Everything" 
            desc="Quebec City front yard landscaping: r s"
            canonical={`${props.website}/quebec-city-front-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City front yard landscaping" //KW
            />
            <Header
            title="Quebec City front yard landscaping" //KW
            subtitle="r s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i c"
            image="/contractor.jpg"
            alt="Quebec City front yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Quebec City front yard landscaping" //KW
            desc="a a s h"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="o"
            cardDesc3="v"
            />
            <Approach
            title="Quebec City front yard landscaping" //KW
            desc="n w a i"
            />
            <Intro
            subtitle="Exceptional Quebec City front yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="o a"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="i"
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
        