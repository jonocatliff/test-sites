
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
            title="El Paso lawn care companies | We'll Take Care Of Everything" 
            desc="El Paso lawn care companies: f i"
            canonical={`${props.website}/el-paso-lawn-care-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso lawn care companies" //KW
            />
            <Header
            title="El Paso lawn care companies" //KW
            subtitle="f i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e w"
            image="/window-washing.jpg"
            alt="El Paso lawn care companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional El Paso lawn care companies" //KW
            desc="  I n  "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="El Paso lawn care companies" //KW
            desc="e e x  "
            />
            <Intro
            subtitle="Exceptional El Paso lawn care companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="b s"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="A"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        