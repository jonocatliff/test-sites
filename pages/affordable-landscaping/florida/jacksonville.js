
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
            title="Jacksonville affordable landscaping | We'll Take Care Of Everything" 
            desc="Jacksonville affordable landscaping: a n"
            canonical={`${props.website}/jacksonville-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville affordable landscaping" //KW
            />
            <Header
            title="Jacksonville affordable landscaping" //KW
            subtitle="a n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e h"
            image="/window-installations.jpg"
            alt="Jacksonville affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Jacksonville affordable landscaping" //KW
            desc="  e s  "
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="n"
            cardDesc3="n"
            />
            <Approach
            title="Jacksonville affordable landscaping" //KW
            desc="e p r  "
            />
            <Intro
            subtitle="Exceptional Jacksonville affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o o"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2=" "
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
        