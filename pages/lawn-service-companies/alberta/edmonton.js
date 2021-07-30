
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
            title="Edmonton lawn service companies | We'll Take Care Of Everything" 
            desc="Edmonton lawn service companies: d w"
            canonical={`${props.website}/edmonton-lawn-service-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton lawn service companies" //KW
            />
            <Header
            title="Edmonton lawn service companies" //KW
            subtitle="d w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o h"
            image="/window-washing.jpg"
            alt="Edmonton lawn service companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Edmonton lawn service companies" //KW
            desc="  t f s"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="h"
            />
            <Approach
            title="Edmonton lawn service companies" //KW
            desc="p   c I"
            />
            <Intro
            subtitle="Exceptional Edmonton lawn service companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r r"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="e"
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
        