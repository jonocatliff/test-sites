
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
            title="Albuquerque grass mowing service | We'll Take Care Of Everything" 
            desc="Albuquerque grass mowing service: n n"
            canonical={`${props.website}/albuquerque-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque grass mowing service" //KW
            />
            <Header
            title="Albuquerque grass mowing service" //KW
            subtitle="n n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="d e"
            image="/window-installation.jpg"
            alt="Albuquerque grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Albuquerque grass mowing service" //KW
            desc="n   h w"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Albuquerque grass mowing service" //KW
            desc="a p    "
            />
            <Intro
            subtitle="Exceptional Albuquerque grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="n t"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="p"
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
        