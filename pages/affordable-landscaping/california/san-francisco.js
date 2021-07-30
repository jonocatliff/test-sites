
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
            title="San Francisco affordable landscaping | We'll Take Care Of Everything" 
            desc="San Francisco affordable landscaping: t P"
            canonical={`${props.website}/san-francisco-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco affordable landscaping" //KW
            />
            <Header
            title="San Francisco affordable landscaping" //KW
            subtitle="t P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="x e"
            image="/window-installation.jpg"
            alt="San Francisco affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Francisco affordable landscaping" //KW
            desc="n   o e"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="d"
            cardDesc3="d"
            />
            <Approach
            title="San Francisco affordable landscaping" //KW
            desc="  p i c"
            />
            <Intro
            subtitle="Exceptional San Francisco affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="v f"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="o"
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
        