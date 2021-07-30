
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
            title="New York City lawn landscaping | We'll Take Care Of Everything" 
            desc="New York City lawn landscaping: i t"
            canonical={`${props.website}/new-york-city-lawn-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City lawn landscaping" //KW
            />
            <Header
            title="New York City lawn landscaping" //KW
            subtitle="i t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="i o"
            image="/window-washing.jpg"
            alt="New York City lawn landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional New York City lawn landscaping" //KW
            desc="e k s  "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="v"
            cardDesc3="k"
            />
            <Approach
            title="New York City lawn landscaping" //KW
            desc="h n b a"
            />
            <Intro
            subtitle="Exceptional New York City lawn landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="  f"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2=" "
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
        