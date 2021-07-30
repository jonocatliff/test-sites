
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
            title="Las Vegas lawn care maintenance | We'll Take Care Of Everything" 
            desc="Las Vegas lawn care maintenance: o y"
            canonical={`${props.website}/las-vegas-lawn-care-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas lawn care maintenance" //KW
            />
            <Header
            title="Las Vegas lawn care maintenance" //KW
            subtitle="o y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="w l"
            image="/window-installations.jpg"
            alt="Las Vegas lawn care maintenance"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Las Vegas lawn care maintenance" //KW
            desc="s i e  "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="a"
            cardDesc3="f"
            />
            <Approach
            title="Las Vegas lawn care maintenance" //KW
            desc="e y e t"
            />
            <Intro
            subtitle="Exceptional Las Vegas lawn care maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="o  "
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="g"
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
        