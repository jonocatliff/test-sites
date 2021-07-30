
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
            title="Dallas basement egress window installation | We'll Take Care Of Everything" 
            desc="Dallas basement egress window installation: P o"
            canonical={`${props.website}/dallas-basement-egress-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas basement egress window installation" //KW
            />
            <Header
            title="Dallas basement egress window installation" //KW
            subtitle="P o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="P o"
            image="/window-installation.jpg"
            alt="Dallas basement egress window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Dallas basement egress window installation" //KW
            desc="s     p"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="P"
            cardDesc3="P"
            />
            <Approach
            title="Dallas basement egress window installation" //KW
            desc="P p o h"
            />
            <Intro
            subtitle="Exceptional Dallas basement egress window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="P  "
            cardDesc3="P"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="P" //KW
            desc2="P"
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
        