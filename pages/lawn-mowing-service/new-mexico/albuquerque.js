
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
            title="Albuquerque lawn mowing service | We'll Take Care Of Everything" 
            desc="Albuquerque lawn mowing service: s n"
            canonical={`${props.website}/albuquerque-lawn-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque lawn mowing service" //KW
            />
            <Header
            title="Albuquerque lawn mowing service" //KW
            subtitle="s n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e  "
            image="/contractor.jpg"
            alt="Albuquerque lawn mowing service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Albuquerque lawn mowing service" //KW
            desc="  r    "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="Albuquerque lawn mowing service" //KW
            desc="s t h  "
            />
            <Intro
            subtitle="Exceptional Albuquerque lawn mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="t  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="a"
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
        