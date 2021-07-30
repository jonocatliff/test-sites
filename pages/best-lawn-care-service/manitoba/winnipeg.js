
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
            title="Winnipeg best lawn care service | We'll Take Care Of Everything" 
            desc="Winnipeg best lawn care service: t r"
            canonical={`${props.website}/winnipeg-best-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg best lawn care service" //KW
            />
            <Header
            title="Winnipeg best lawn care service" //KW
            subtitle="t r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="   "
            image="/window-installation.jpg"
            alt="Winnipeg best lawn care service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Winnipeg best lawn care service" //KW
            desc="d w n d"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="r"
            />
            <Approach
            title="Winnipeg best lawn care service" //KW
            desc="i d o r"
            />
            <Intro
            subtitle="Exceptional Winnipeg best lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="t  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="f"
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
        