
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
            title="Hamilton new window installation | We'll Take Care Of Everything" 
            desc="Hamilton new window installation: t W"
            canonical={`${props.website}/hamilton-new-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton new window installation" //KW
            />
            <Header
            title="Hamilton new window installation" //KW
            subtitle="t W"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a  "
            image="/window-washing.jpg"
            alt="Hamilton new window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Hamilton new window installation" //KW
            desc="n n f o"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="e"
            cardDesc3="o"
            />
            <Approach
            title="Hamilton new window installation" //KW
            desc="u o c i"
            />
            <Intro
            subtitle="Exceptional Hamilton new window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="u h"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="o"
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
        