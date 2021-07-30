
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
            title="Calgary basement egress window replacement | We'll Take Care Of Everything" 
            desc="Calgary basement egress window replacement: y h"
            canonical={`${props.website}/calgary-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary basement egress window replacement" //KW
            />
            <Header
            title="Calgary basement egress window replacement" //KW
            subtitle="y h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r i"
            image="/contractor.jpg"
            alt="Calgary basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Calgary basement egress window replacement" //KW
            desc="n t t r"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="r"
            cardDesc3="a"
            />
            <Approach
            title="Calgary basement egress window replacement" //KW
            desc="v   , a"
            />
            <Intro
            subtitle="Exceptional Calgary basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="v f"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        