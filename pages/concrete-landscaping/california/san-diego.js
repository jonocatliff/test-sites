
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
            title="San Diego concrete landscaping | We'll Take Care Of Everything" 
            desc="San Diego concrete landscaping: c r"
            canonical={`${props.website}/san-diego-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego concrete landscaping" //KW
            />
            <Header
            title="San Diego concrete landscaping" //KW
            subtitle="c r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o r"
            image="/window-washing.jpg"
            alt="San Diego concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Diego concrete landscaping" //KW
            desc="e i   r"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="San Diego concrete landscaping" //KW
            desc="    d O"
            />
            <Intro
            subtitle="Exceptional San Diego concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="i n"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="v"
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
        