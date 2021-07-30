
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
            title="Victoria grass cutting service | We'll Take Care Of Everything" 
            desc="Victoria grass cutting service: , e"
            canonical={`${props.website}/victoria-grass-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria grass cutting service" //KW
            />
            <Header
            title="Victoria grass cutting service" //KW
            subtitle=", e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r i"
            image="/window-installation.jpg"
            alt="Victoria grass cutting service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Victoria grass cutting service" //KW
            desc="a t . c"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Victoria grass cutting service" //KW
            desc="  r e  "
            />
            <Intro
            subtitle="Exceptional Victoria grass cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s n"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2=" "
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
        