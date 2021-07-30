
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
            title="Louisville lawn landscaping | We'll Take Care Of Everything" 
            desc="Louisville lawn landscaping: m I"
            canonical={`${props.website}/louisville-lawn-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville lawn landscaping" //KW
            />
            <Header
            title="Louisville lawn landscaping" //KW
            subtitle="m I"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d t"
            image="/window-washing.jpg"
            alt="Louisville lawn landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Louisville lawn landscaping" //KW
            desc="d u r l"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Louisville lawn landscaping" //KW
            desc="r r e a"
            />
            <Intro
            subtitle="Exceptional Louisville lawn landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="h h"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="g"
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
        