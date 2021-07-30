
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
            title="Kitchener landscape design services | We'll Take Care Of Everything" 
            desc="Kitchener landscape design services: a e"
            canonical={`${props.website}/kitchener-landscape-design-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener landscape design services" //KW
            />
            <Header
            title="Kitchener landscape design services" //KW
            subtitle="a e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="f m"
            image="/window-installation.jpg"
            alt="Kitchener landscape design services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Kitchener landscape design services" //KW
            desc="      w"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Kitchener landscape design services" //KW
            desc="e n w h"
            />
            <Intro
            subtitle="Exceptional Kitchener landscape design services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="p r"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="P"
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
        