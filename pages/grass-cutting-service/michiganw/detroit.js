
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
            title="Detroit grass cutting service | We'll Take Care Of Everything" 
            desc="Detroit grass cutting service: f h"
            canonical={`${props.website}/detroit-grass-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit grass cutting service" //KW
            />
            <Header
            title="Detroit grass cutting service" //KW
            subtitle="f h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="W  "
            image="/window-washing.jpg"
            alt="Detroit grass cutting service"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Detroit grass cutting service" //KW
            desc="o o w f"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="."
            cardDesc2="i"
            cardDesc3="."
            />
            <Approach
            title="Detroit grass cutting service" //KW
            desc="i a i i"
            />
            <Intro
            subtitle="Exceptional Detroit grass cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="g m"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="n"
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
        