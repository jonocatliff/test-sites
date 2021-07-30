
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
            title="Fresno commercial window installation | We'll Take Care Of Everything" 
            desc="Fresno commercial window installation: t l"
            canonical={`${props.website}/fresno-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno commercial window installation" //KW
            />
            <Header
            title="Fresno commercial window installation" //KW
            subtitle="t l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d s"
            image="/contractor.jpg"
            alt="Fresno commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Fresno commercial window installation" //KW
            desc="P s e m"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="w"
            cardDesc3=" "
            />
            <Approach
            title="Fresno commercial window installation" //KW
            desc="n w h f"
            />
            <Intro
            subtitle="Exceptional Fresno commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="p o"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2=" "
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
        