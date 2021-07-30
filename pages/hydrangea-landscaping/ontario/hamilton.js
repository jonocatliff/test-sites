
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
            title="Hamilton hydrangea landscaping | We'll Take Care Of Everything" 
            desc="Hamilton hydrangea landscaping: c g"
            canonical={`${props.website}/hamilton-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton hydrangea landscaping" //KW
            />
            <Header
            title="Hamilton hydrangea landscaping" //KW
            subtitle="c g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e l"
            image="/window-washing.jpg"
            alt="Hamilton hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Hamilton hydrangea landscaping" //KW
            desc="r v   e"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Hamilton hydrangea landscaping" //KW
            desc="b o o  "
            />
            <Intro
            subtitle="Exceptional Hamilton hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="."
            cardDesc2="c r"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="i"
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
        