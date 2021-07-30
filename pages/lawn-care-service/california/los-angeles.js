
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
            title="Los Angeles lawn care service | We'll Take Care Of Everything" 
            desc="Los Angeles lawn care service: n k"
            canonical={`${props.website}/los-angeles-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles lawn care service" //KW
            />
            <Header
            title="Los Angeles lawn care service" //KW
            subtitle="n k"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t e"
            image="/window-washing.jpg"
            alt="Los Angeles lawn care service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Los Angeles lawn care service" //KW
            desc="  i l i"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="o"
            cardDesc3="a"
            />
            <Approach
            title="Los Angeles lawn care service" //KW
            desc="n c r i"
            />
            <Intro
            subtitle="Exceptional Los Angeles lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="f v"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="d"
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
        