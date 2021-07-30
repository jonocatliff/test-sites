
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
            title="Fort Worth lawn cutting service | We'll Take Care Of Everything" 
            desc="Fort Worth lawn cutting service: s s"
            canonical={`${props.website}/fort-worth-lawn-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth lawn cutting service" //KW
            />
            <Header
            title="Fort Worth lawn cutting service" //KW
            subtitle="s s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a i"
            image="/window-installations.jpg"
            alt="Fort Worth lawn cutting service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fort Worth lawn cutting service" //KW
            desc="d a e n"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="r"
            cardDesc3="r"
            />
            <Approach
            title="Fort Worth lawn cutting service" //KW
            desc="e e   O"
            />
            <Intro
            subtitle="Exceptional Fort Worth lawn cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="n o"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="h"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        