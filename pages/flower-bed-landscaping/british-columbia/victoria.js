
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
            title="Victoria flower bed landscaping | We'll Take Care Of Everything" 
            desc="Victoria flower bed landscaping: l h"
            canonical={`${props.website}/victoria-flower-bed-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria flower bed landscaping" //KW
            />
            <Header
            title="Victoria flower bed landscaping" //KW
            subtitle="l h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="t e"
            image="/window-washing.jpg"
            alt="Victoria flower bed landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Victoria flower bed landscaping" //KW
            desc="  I n w"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=","
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="w"
            cardDesc3="h"
            />
            <Approach
            title="Victoria flower bed landscaping" //KW
            desc="  o i e"
            />
            <Intro
            subtitle="Exceptional Victoria flower bed landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  i"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="W"
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
        