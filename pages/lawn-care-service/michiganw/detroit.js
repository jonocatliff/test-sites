
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
            title="Detroit lawn care service | We'll Take Care Of Everything" 
            desc="Detroit lawn care service: r s"
            canonical={`${props.website}/detroit-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit lawn care service" //KW
            />
            <Header
            title="Detroit lawn care service" //KW
            subtitle="r s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e  "
            image="/contractor.jpg"
            alt="Detroit lawn care service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Detroit lawn care service" //KW
            desc="d d    "
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="d"
            cardDesc3="m"
            />
            <Approach
            title="Detroit lawn care service" //KW
            desc="o      "
            />
            <Intro
            subtitle="Exceptional Detroit lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="  n"
            cardDesc3=" "
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
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        