
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
            title="Milwaukee yard service | We'll Take Care Of Everything" 
            desc="Milwaukee yard service: e m"
            canonical={`${props.website}/milwaukee-yard-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee yard service" //KW
            />
            <Header
            title="Milwaukee yard service" //KW
            subtitle="e m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s t"
            image="/window-installation.jpg"
            alt="Milwaukee yard service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Milwaukee yard service" //KW
            desc="o   c undefined"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="h"
            cardDesc3="l"
            />
            <Approach
            title="Milwaukee yard service" //KW
            desc="o m n  "
            />
            <Intro
            subtitle="Exceptional Milwaukee yard service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="  undefined"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="b"
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
        