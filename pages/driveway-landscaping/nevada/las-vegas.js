
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
            title="Las Vegas driveway landscaping | We'll Take Care Of Everything" 
            desc="Las Vegas driveway landscaping: i ’"
            canonical={`${props.website}/las-vegas-driveway-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas driveway landscaping" //KW
            />
            <Header
            title="Las Vegas driveway landscaping" //KW
            subtitle="i ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="y t"
            image="/window-installations.jpg"
            alt="Las Vegas driveway landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Las Vegas driveway landscaping" //KW
            desc=".   . e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2="v"
            cardDesc3="c"
            />
            <Approach
            title="Las Vegas driveway landscaping" //KW
            desc="P . o e"
            />
            <Intro
            subtitle="Exceptional Las Vegas driveway landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r w"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="h"
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
        