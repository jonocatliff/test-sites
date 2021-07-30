
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
            title="Los Angeles sod installation near me | We'll Take Care Of Everything" 
            desc="Los Angeles sod installation near me:   n"
            canonical={`${props.website}/los-angeles-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles sod installation near me" //KW
            />
            <Header
            title="Los Angeles sod installation near me" //KW
            subtitle="  n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n  "
            image="/window-washing.jpg"
            alt="Los Angeles sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Los Angeles sod installation near me" //KW
            desc="  e o undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="y"
            cardDesc3=" "
            />
            <Approach
            title="Los Angeles sod installation near me" //KW
            desc="a r s r"
            />
            <Intro
            subtitle="Exceptional Los Angeles sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="e undefined"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="v"
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
        