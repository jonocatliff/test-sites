
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
            title="Montreal lawn repair | We'll Take Care Of Everything" 
            desc="Montreal lawn repair: s  "
            canonical={`${props.website}/montreal-lawn-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal lawn repair" //KW
            />
            <Header
            title="Montreal lawn repair" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="l p"
            image="/contractor.jpg"
            alt="Montreal lawn repair"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Montreal lawn repair" //KW
            desc="  o d f"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="r"
            cardDesc3="h"
            />
            <Approach
            title="Montreal lawn repair" //KW
            desc="i d d k"
            />
            <Intro
            subtitle="Exceptional Montreal lawn repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c o"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="t"
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
        