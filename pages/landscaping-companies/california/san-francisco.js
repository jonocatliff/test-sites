
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
            title="San Francisco landscaping companies | We'll Take Care Of Everything" 
            desc="San Francisco landscaping companies: l m"
            canonical={`${props.website}/san-francisco-landscaping-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco landscaping companies" //KW
            />
            <Header
            title="San Francisco landscaping companies" //KW
            subtitle="l m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  c"
            image="/window-washing.jpg"
            alt="San Francisco landscaping companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Francisco landscaping companies" //KW
            desc="o     h"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="n"
            cardDesc3="A"
            />
            <Approach
            title="San Francisco landscaping companies" //KW
            desc="b     e"
            />
            <Intro
            subtitle="Exceptional San Francisco landscaping companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="  u"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
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
        