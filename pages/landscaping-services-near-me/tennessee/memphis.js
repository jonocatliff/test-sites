
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
            title="Memphis landscaping services near me | We'll Take Care Of Everything" 
            desc="Memphis landscaping services near me:    "
            canonical={`${props.website}/memphis-landscaping-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis landscaping services near me" //KW
            />
            <Header
            title="Memphis landscaping services near me" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a  "
            image="/window-washing.jpg"
            alt="Memphis landscaping services near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Memphis landscaping services near me" //KW
            desc="f u t p"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3="W"
            />
            <Approach
            title="Memphis landscaping services near me" //KW
            desc="n e n  "
            />
            <Intro
            subtitle="Exceptional Memphis landscaping services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="  o"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="n"
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
        