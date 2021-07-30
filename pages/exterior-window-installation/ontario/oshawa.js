
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
            title="Oshawa exterior window installation | We'll Take Care Of Everything" 
            desc="Oshawa exterior window installation: n v"
            canonical={`${props.website}/oshawa-exterior-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa exterior window installation" //KW
            />
            <Header
            title="Oshawa exterior window installation" //KW
            subtitle="n v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s i"
            image="/window-installations.jpg"
            alt="Oshawa exterior window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oshawa exterior window installation" //KW
            desc="r i r p"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="d"
            cardDesc3="o"
            />
            <Approach
            title="Oshawa exterior window installation" //KW
            desc="n o   p"
            />
            <Intro
            subtitle="Exceptional Oshawa exterior window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="r  "
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
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
        