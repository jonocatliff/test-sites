
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
            title="Columbus new window installation | We'll Take Care Of Everything" 
            desc="Columbus new window installation: r h"
            canonical={`${props.website}/columbus-new-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus new window installation" //KW
            />
            <Header
            title="Columbus new window installation" //KW
            subtitle="r h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e  "
            image="/window-washing.jpg"
            alt="Columbus new window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Columbus new window installation" //KW
            desc="y o r n"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="v"
            cardDesc3="t"
            />
            <Approach
            title="Columbus new window installation" //KW
            desc="    e r"
            />
            <Intro
            subtitle="Exceptional Columbus new window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  u"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="f"
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
        