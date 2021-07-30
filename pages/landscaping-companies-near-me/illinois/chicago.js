
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
            title="Chicago landscaping companies near me | We'll Take Care Of Everything" 
            desc="Chicago landscaping companies near me: a d"
            canonical={`${props.website}/chicago-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago landscaping companies near me" //KW
            />
            <Header
            title="Chicago landscaping companies near me" //KW
            subtitle="a d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  w"
            image="/window-washing.jpg"
            alt="Chicago landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Chicago landscaping companies near me" //KW
            desc="i g a i"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="Chicago landscaping companies near me" //KW
            desc="o d e  "
            />
            <Intro
            subtitle="Exceptional Chicago landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="n e"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="r"
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
        