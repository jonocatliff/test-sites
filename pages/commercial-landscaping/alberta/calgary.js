
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
            title="Calgary commercial landscaping | We'll Take Care Of Everything" 
            desc="Calgary commercial landscaping: t s"
            canonical={`${props.website}/calgary-commercial-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary commercial landscaping" //KW
            />
            <Header
            title="Calgary commercial landscaping" //KW
            subtitle="t s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i a"
            image="/window-installation.jpg"
            alt="Calgary commercial landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Calgary commercial landscaping" //KW
            desc="n c l e"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Calgary commercial landscaping" //KW
            desc="    i o"
            />
            <Intro
            subtitle="Exceptional Calgary commercial landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e r"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="i"
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
        