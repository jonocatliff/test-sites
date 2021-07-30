
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
            title="Columbus weed control service | We'll Take Care Of Everything" 
            desc="Columbus weed control service: t e"
            canonical={`${props.website}/columbus-weed-control-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus weed control service" //KW
            />
            <Header
            title="Columbus weed control service" //KW
            subtitle="t e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o p"
            image="/contractor.jpg"
            alt="Columbus weed control service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Columbus weed control service" //KW
            desc="y a r undefined"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="e"
            cardDesc3="w"
            />
            <Approach
            title="Columbus weed control service" //KW
            desc="    e  "
            />
            <Intro
            subtitle="Exceptional Columbus weed control service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="a undefined"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="n"
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
        