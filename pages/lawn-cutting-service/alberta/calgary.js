
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
            title="Calgary lawn cutting service | We'll Take Care Of Everything" 
            desc="Calgary lawn cutting service: I r"
            canonical={`${props.website}/calgary-lawn-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary lawn cutting service" //KW
            />
            <Header
            title="Calgary lawn cutting service" //KW
            subtitle="I r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  a"
            image="/window-installation.jpg"
            alt="Calgary lawn cutting service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary lawn cutting service" //KW
            desc="i s r e"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="p"
            cardDesc3="i"
            />
            <Approach
            title="Calgary lawn cutting service" //KW
            desc="n   h f"
            />
            <Intro
            subtitle="Exceptional Calgary lawn cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r o"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="o"
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
        