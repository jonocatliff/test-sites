
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
            title="Jacksonville lawn repair | We'll Take Care Of Everything" 
            desc="Jacksonville lawn repair:   w"
            canonical={`${props.website}/jacksonville-lawn-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville lawn repair" //KW
            />
            <Header
            title="Jacksonville lawn repair" //KW
            subtitle="  w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e i"
            image="/window-installations.jpg"
            alt="Jacksonville lawn repair"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Jacksonville lawn repair" //KW
            desc="i y m i"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="d"
            cardDesc3="g"
            />
            <Approach
            title="Jacksonville lawn repair" //KW
            desc="t o    "
            />
            <Intro
            subtitle="Exceptional Jacksonville lawn repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t i"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="d"
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
        