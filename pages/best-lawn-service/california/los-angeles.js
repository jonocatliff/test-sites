
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
            title="Los Angeles best lawn service | We'll Take Care Of Everything" 
            desc="Los Angeles best lawn service: s  "
            canonical={`${props.website}/los-angeles-best-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles best lawn service" //KW
            />
            <Header
            title="Los Angeles best lawn service" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="m n"
            image="/contractor.jpg"
            alt="Los Angeles best lawn service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Los Angeles best lawn service" //KW
            desc="e i d  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="o"
            />
            <Approach
            title="Los Angeles best lawn service" //KW
            desc="s i o  "
            />
            <Intro
            subtitle="Exceptional Los Angeles best lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="   "
            cardDesc3="O"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="e"
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
        