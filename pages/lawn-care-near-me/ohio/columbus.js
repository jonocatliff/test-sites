
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
            title="Columbus lawn care near me | We'll Take Care Of Everything" 
            desc="Columbus lawn care near me: o d"
            canonical={`${props.website}/columbus-lawn-care-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus lawn care near me" //KW
            />
            <Header
            title="Columbus lawn care near me" //KW
            subtitle="o d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t a"
            image="/contractor.jpg"
            alt="Columbus lawn care near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus lawn care near me" //KW
            desc="p o s o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="e"
            cardDesc3="r"
            />
            <Approach
            title="Columbus lawn care near me" //KW
            desc="n i d e"
            />
            <Intro
            subtitle="Exceptional Columbus lawn care near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="r  "
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="o"
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
        