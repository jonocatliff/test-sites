
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
            title="Hamilton yard landscaping | We'll Take Care Of Everything" 
            desc="Hamilton yard landscaping: o n"
            canonical={`${props.website}/hamilton-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton yard landscaping" //KW
            />
            <Header
            title="Hamilton yard landscaping" //KW
            subtitle="o n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u  "
            image="/window-installation.jpg"
            alt="Hamilton yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Hamilton yard landscaping" //KW
            desc="n a r undefined"
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
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Hamilton yard landscaping" //KW
            desc="l   v I"
            />
            <Intro
            subtitle="Exceptional Hamilton yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="v undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        