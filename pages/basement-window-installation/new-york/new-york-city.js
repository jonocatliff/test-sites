
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
            title="New York City basement window installation | We'll Take Care Of Everything" 
            desc="New York City basement window installation: t o"
            canonical={`${props.website}/new-york-city-basement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City basement window installation" //KW
            />
            <Header
            title="New York City basement window installation" //KW
            subtitle="t o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o o"
            image="/contractor.jpg"
            alt="New York City basement window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional New York City basement window installation" //KW
            desc="e o d s"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="v"
            cardDesc3="o"
            />
            <Approach
            title="New York City basement window installation" //KW
            desc="  w d s"
            />
            <Intro
            subtitle="Exceptional New York City basement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="u ."
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="i"
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
        