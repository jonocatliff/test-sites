
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
            title="Brampton concrete landscaping | We'll Take Care Of Everything" 
            desc="Brampton concrete landscaping: x f"
            canonical={`${props.website}/brampton-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton concrete landscaping" //KW
            />
            <Header
            title="Brampton concrete landscaping" //KW
            subtitle="x f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a i"
            image="/contractor.jpg"
            alt="Brampton concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Brampton concrete landscaping" //KW
            desc="d   e t"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="l"
            cardDesc3="g"
            />
            <Approach
            title="Brampton concrete landscaping" //KW
            desc="n   f v"
            />
            <Intro
            subtitle="Exceptional Brampton concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="c r"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="d"
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
        