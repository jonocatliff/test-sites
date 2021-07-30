
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
            title="Boston hydrangea landscaping | We'll Take Care Of Everything" 
            desc="Boston hydrangea landscaping: e m"
            canonical={`${props.website}/boston-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston hydrangea landscaping" //KW
            />
            <Header
            title="Boston hydrangea landscaping" //KW
            subtitle="e m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n h"
            image="/contractor.jpg"
            alt="Boston hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Boston hydrangea landscaping" //KW
            desc="y   v d"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="i"
            cardDesc3="l"
            />
            <Approach
            title="Boston hydrangea landscaping" //KW
            desc="w   h i"
            />
            <Intro
            subtitle="Exceptional Boston hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="c  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
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
        