
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
            title="Houston window installation company | We'll Take Care Of Everything" 
            desc="Houston window installation company: e  "
            canonical={`${props.website}/houston-window-installation-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston window installation company" //KW
            />
            <Header
            title="Houston window installation company" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  d"
            image="/window-installation.jpg"
            alt="Houston window installation company"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Houston window installation company" //KW
            desc="i   c f"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Houston window installation company" //KW
            desc="t   e h"
            />
            <Intro
            subtitle="Exceptional Houston window installation company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="p r"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="u"
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
        