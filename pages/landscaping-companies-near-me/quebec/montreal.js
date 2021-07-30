
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
            title="Montreal landscaping companies near me | We'll Take Care Of Everything" 
            desc="Montreal landscaping companies near me: f r"
            canonical={`${props.website}/montreal-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal landscaping companies near me" //KW
            />
            <Header
            title="Montreal landscaping companies near me" //KW
            subtitle="f r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e  "
            image="/window-washing.jpg"
            alt="Montreal landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Montreal landscaping companies near me" //KW
            desc="y e    "
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="c"
            cardDesc3="o"
            />
            <Approach
            title="Montreal landscaping companies near me" //KW
            desc="l   u  "
            />
            <Intro
            subtitle="Exceptional Montreal landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="  s"
            cardDesc3="O"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="r"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        