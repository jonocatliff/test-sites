
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
            title="El Paso lawn care companies near me | We'll Take Care Of Everything" 
            desc="El Paso lawn care companies near me: t e"
            canonical={`${props.website}/el-paso-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso lawn care companies near me" //KW
            />
            <Header
            title="El Paso lawn care companies near me" //KW
            subtitle="t e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s  "
            image="/window-installation.jpg"
            alt="El Paso lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional El Paso lawn care companies near me" //KW
            desc="o a z r"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=","
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="l"
            cardDesc3="a"
            />
            <Approach
            title="El Paso lawn care companies near me" //KW
            desc="p e b r"
            />
            <Intro
            subtitle="Exceptional El Paso lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="   "
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="a"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        