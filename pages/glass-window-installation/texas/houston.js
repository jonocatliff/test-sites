
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
            title="Houston glass window installation | We'll Take Care Of Everything" 
            desc="Houston glass window installation: n s"
            canonical={`${props.website}/houston-glass-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston glass window installation" //KW
            />
            <Header
            title="Houston glass window installation" //KW
            subtitle="n s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="d h"
            image="/window-installations.jpg"
            alt="Houston glass window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Houston glass window installation" //KW
            desc="a s r e"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="r"
            cardDesc3="."
            />
            <Approach
            title="Houston glass window installation" //KW
            desc="n p n  "
            />
            <Intro
            subtitle="Exceptional Houston glass window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="g v"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2=" "
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
        