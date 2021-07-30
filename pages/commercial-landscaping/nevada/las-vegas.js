
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
            title="Las Vegas commercial landscaping | We'll Take Care Of Everything" 
            desc="Las Vegas commercial landscaping: p y"
            canonical={`${props.website}/las-vegas-commercial-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas commercial landscaping" //KW
            />
            <Header
            title="Las Vegas commercial landscaping" //KW
            subtitle="p y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  h"
            image="/window-installation.jpg"
            alt="Las Vegas commercial landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Las Vegas commercial landscaping" //KW
            desc="o d a w"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Las Vegas commercial landscaping" //KW
            desc="w e t  "
            />
            <Intro
            subtitle="Exceptional Las Vegas commercial landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="v r"
            cardDesc3="."
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2=" "
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
        