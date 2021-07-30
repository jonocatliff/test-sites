
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
            title="Columbus front yard landscaping | We'll Take Care Of Everything" 
            desc="Columbus front yard landscaping: o h"
            canonical={`${props.website}/columbus-front-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus front yard landscaping" //KW
            />
            <Header
            title="Columbus front yard landscaping" //KW
            subtitle="o h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i a"
            image="/window-installation.jpg"
            alt="Columbus front yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Columbus front yard landscaping" //KW
            desc="  o c d"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="m"
            />
            <Approach
            title="Columbus front yard landscaping" //KW
            desc="  o   p"
            />
            <Intro
            subtitle="Exceptional Columbus front yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="a  "
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="l"
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
        