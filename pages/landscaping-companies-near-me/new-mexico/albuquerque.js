
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
            title="Albuquerque landscaping companies near me | We'll Take Care Of Everything" 
            desc="Albuquerque landscaping companies near me: I f"
            canonical={`${props.website}/albuquerque-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque landscaping companies near me" //KW
            />
            <Header
            title="Albuquerque landscaping companies near me" //KW
            subtitle="I f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r a"
            image="/contractor.jpg"
            alt="Albuquerque landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Albuquerque landscaping companies near me" //KW
            desc="u h p s"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="n"
            cardDesc3="a"
            />
            <Approach
            title="Albuquerque landscaping companies near me" //KW
            desc="s , i  "
            />
            <Intro
            subtitle="Exceptional Albuquerque landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="  n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="i"
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
        