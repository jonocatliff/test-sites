
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
            title="Philadelphia sod landscaping | We'll Take Care Of Everything" 
            desc="Philadelphia sod landscaping: d l"
            canonical={`${props.website}/philadelphia-sod-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia sod landscaping" //KW
            />
            <Header
            title="Philadelphia sod landscaping" //KW
            subtitle="d l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r e"
            image="/window-installations.jpg"
            alt="Philadelphia sod landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Philadelphia sod landscaping" //KW
            desc="n l f undefined"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Philadelphia sod landscaping" //KW
            desc="e o   h"
            />
            <Intro
            subtitle="Exceptional Philadelphia sod landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="b"
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
        