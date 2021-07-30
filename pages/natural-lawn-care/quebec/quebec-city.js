
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
            title="Quebec City natural lawn care | We'll Take Care Of Everything" 
            desc="Quebec City natural lawn care:    "
            canonical={`${props.website}/quebec-city-natural-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City natural lawn care" //KW
            />
            <Header
            title="Quebec City natural lawn care" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  c"
            image="/window-installations.jpg"
            alt="Quebec City natural lawn care"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Quebec City natural lawn care" //KW
            desc="a   e i"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Quebec City natural lawn care" //KW
            desc=": i    "
            />
            <Intro
            subtitle="Exceptional Quebec City natural lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r undefined"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="c"
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
        