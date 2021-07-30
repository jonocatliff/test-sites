
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
            title="Detroit lawn mowing near me | We'll Take Care Of Everything" 
            desc="Detroit lawn mowing near me: y o"
            canonical={`${props.website}/detroit-lawn-mowing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit lawn mowing near me" //KW
            />
            <Header
            title="Detroit lawn mowing near me" //KW
            subtitle="y o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t n"
            image="/window-installation.jpg"
            alt="Detroit lawn mowing near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Detroit lawn mowing near me" //KW
            desc="d r    "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="f"
            cardDesc3=" "
            />
            <Approach
            title="Detroit lawn mowing near me" //KW
            desc="a a n s"
            />
            <Intro
            subtitle="Exceptional Detroit lawn mowing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="y s"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="a"
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
        