
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
            title="Chicago outdoor landscaping | We'll Take Care Of Everything" 
            desc="Chicago outdoor landscaping: n r"
            canonical={`${props.website}/chicago-outdoor-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago outdoor landscaping" //KW
            />
            <Header
            title="Chicago outdoor landscaping" //KW
            subtitle="n r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="l i"
            image="/contractor.jpg"
            alt="Chicago outdoor landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Chicago outdoor landscaping" //KW
            desc="n l d undefined"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Chicago outdoor landscaping" //KW
            desc=", c x g"
            />
            <Intro
            subtitle="Exceptional Chicago outdoor landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="r undefined"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
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
        