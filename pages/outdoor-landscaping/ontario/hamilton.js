
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
            title="Hamilton outdoor landscaping | We'll Take Care Of Everything" 
            desc="Hamilton outdoor landscaping:   m"
            canonical={`${props.website}/hamilton-outdoor-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton outdoor landscaping" //KW
            />
            <Header
            title="Hamilton outdoor landscaping" //KW
            subtitle="  m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a r"
            image="/window-installation.jpg"
            alt="Hamilton outdoor landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Hamilton outdoor landscaping" //KW
            desc=". P e undefined"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Hamilton outdoor landscaping" //KW
            desc="p d r y"
            />
            <Intro
            subtitle="Exceptional Hamilton outdoor landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="w undefined"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="l"
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
        