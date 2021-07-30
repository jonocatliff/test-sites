
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
            title="Fort Worth landscaping companies near me | We'll Take Care Of Everything" 
            desc="Fort Worth landscaping companies near me: f  "
            canonical={`${props.website}/fort-worth-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth landscaping companies near me" //KW
            />
            <Header
            title="Fort Worth landscaping companies near me" //KW
            subtitle="f  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o i"
            image="/window-installation.jpg"
            alt="Fort Worth landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fort Worth landscaping companies near me" //KW
            desc="  t e  "
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="W"
            cardDesc3="a"
            />
            <Approach
            title="Fort Worth landscaping companies near me" //KW
            desc="t w n o"
            />
            <Intro
            subtitle="Exceptional Fort Worth landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="i  "
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
            desc2="o"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        