
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
            title="Los Angeles lawn mowing service | We'll Take Care Of Everything" 
            desc="Los Angeles lawn mowing service: t c"
            canonical={`${props.website}/los-angeles-lawn-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles lawn mowing service" //KW
            />
            <Header
            title="Los Angeles lawn mowing service" //KW
            subtitle="t c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  e"
            image="/window-installations.jpg"
            alt="Los Angeles lawn mowing service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Los Angeles lawn mowing service" //KW
            desc="o y s e"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3="c"
            />
            <Approach
            title="Los Angeles lawn mowing service" //KW
            desc="  o n r"
            />
            <Intro
            subtitle="Exceptional Los Angeles lawn mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i ,"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="c"
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
        