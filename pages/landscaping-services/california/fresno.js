
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
            title="Fresno landscaping services | We'll Take Care Of Everything" 
            desc="Fresno landscaping services:   t"
            canonical={`${props.website}/fresno-landscaping-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno landscaping services" //KW
            />
            <Header
            title="Fresno landscaping services" //KW
            subtitle="  t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="u f"
            image="/window-installation.jpg"
            alt="Fresno landscaping services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fresno landscaping services" //KW
            desc="a u t y"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="e"
            cardDesc3="s"
            />
            <Approach
            title="Fresno landscaping services" //KW
            desc="  p t e"
            />
            <Intro
            subtitle="Exceptional Fresno landscaping services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="n t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="r"
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
        