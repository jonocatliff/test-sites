
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
            title="Quebec City landscaping company | We'll Take Care Of Everything" 
            desc="Quebec City landscaping company: o s"
            canonical={`${props.website}/quebec-city-landscaping-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City landscaping company" //KW
            />
            <Header
            title="Quebec City landscaping company" //KW
            subtitle="o s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="y u"
            image="/window-installation.jpg"
            alt="Quebec City landscaping company"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Quebec City landscaping company" //KW
            desc="i r t e"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Quebec City landscaping company" //KW
            desc="n   i y"
            />
            <Intro
            subtitle="Exceptional Quebec City landscaping company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t s"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="a"
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
        