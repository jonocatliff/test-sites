
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
            title="Edmonton grass mowing service | We'll Take Care Of Everything" 
            desc="Edmonton grass mowing service: a v"
            canonical={`${props.website}/edmonton-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton grass mowing service" //KW
            />
            <Header
            title="Edmonton grass mowing service" //KW
            subtitle="a v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e r"
            image="/contractor.jpg"
            alt="Edmonton grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Edmonton grass mowing service" //KW
            desc="r t c l"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="o"
            cardDesc3="e"
            />
            <Approach
            title="Edmonton grass mowing service" //KW
            desc="n o w i"
            />
            <Intro
            subtitle="Exceptional Edmonton grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="d c"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
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
        