
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
            title="Montreal landscaping contractors | We'll Take Care Of Everything" 
            desc="Montreal landscaping contractors: n r"
            canonical={`${props.website}/montreal-landscaping-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal landscaping contractors" //KW
            />
            <Header
            title="Montreal landscaping contractors" //KW
            subtitle="n r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="O p"
            image="/contractor.jpg"
            alt="Montreal landscaping contractors"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Montreal landscaping contractors" //KW
            desc="t I a u"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="n"
            cardDesc3="f"
            />
            <Approach
            title="Montreal landscaping contractors" //KW
            desc="o t e  "
            />
            <Intro
            subtitle="Exceptional Montreal landscaping contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e e"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="h"
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
        