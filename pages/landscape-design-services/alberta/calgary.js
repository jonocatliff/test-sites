
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
            title="Calgary landscape design services | We'll Take Care Of Everything" 
            desc="Calgary landscape design services: e r"
            canonical={`${props.website}/calgary-landscape-design-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary landscape design services" //KW
            />
            <Header
            title="Calgary landscape design services" //KW
            subtitle="e r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d a"
            image="/contractor.jpg"
            alt="Calgary landscape design services"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary landscape design services" //KW
            desc="c u d t"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="n"
            cardDesc3="r"
            />
            <Approach
            title="Calgary landscape design services" //KW
            desc="  ’ . n"
            />
            <Intro
            subtitle="Exceptional Calgary landscape design services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="l h"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="I"
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
        