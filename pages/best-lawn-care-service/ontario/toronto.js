
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
            title="Toronto best lawn care service | We'll Take Care Of Everything" 
            desc="Toronto best lawn care service: d l"
            canonical={`${props.website}/toronto-best-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto best lawn care service" //KW
            />
            <Header
            title="Toronto best lawn care service" //KW
            subtitle="d l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a m"
            image="/window-installations.jpg"
            alt="Toronto best lawn care service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Toronto best lawn care service" //KW
            desc="r o s l"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="y"
            cardDesc3=" "
            />
            <Approach
            title="Toronto best lawn care service" //KW
            desc="o t T  "
            />
            <Intro
            subtitle="Exceptional Toronto best lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="d  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="t"
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
        