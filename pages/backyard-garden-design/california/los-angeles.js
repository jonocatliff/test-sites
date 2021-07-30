
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
            title="Los Angeles backyard garden design | We'll Take Care Of Everything" 
            desc="Los Angeles backyard garden design: e r"
            canonical={`${props.website}/los-angeles-backyard-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles backyard garden design" //KW
            />
            <Header
            title="Los Angeles backyard garden design" //KW
            subtitle="e r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n  "
            image="/window-installations.jpg"
            alt="Los Angeles backyard garden design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Los Angeles backyard garden design" //KW
            desc="a n u f"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="l"
            cardDesc3="k"
            />
            <Approach
            title="Los Angeles backyard garden design" //KW
            desc="a   w O"
            />
            <Intro
            subtitle="Exceptional Los Angeles backyard garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="i r"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="r"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        