
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
            title="Ottowa lawn care companies | We'll Take Care Of Everything" 
            desc="Ottowa lawn care companies: m l"
            canonical={`${props.website}/ottowa-lawn-care-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa lawn care companies" //KW
            />
            <Header
            title="Ottowa lawn care companies" //KW
            subtitle="m l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="p e"
            image="/window-washing.jpg"
            alt="Ottowa lawn care companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Ottowa lawn care companies" //KW
            desc="w n h ."
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="n"
            cardDesc3="r"
            />
            <Approach
            title="Ottowa lawn care companies" //KW
            desc="u d h  "
            />
            <Intro
            subtitle="Exceptional Ottowa lawn care companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r i"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="v"
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
        