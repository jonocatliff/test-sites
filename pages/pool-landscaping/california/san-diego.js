
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
            title="San Diego pool landscaping | We'll Take Care Of Everything" 
            desc="San Diego pool landscaping:   O"
            canonical={`${props.website}/san-diego-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego pool landscaping" //KW
            />
            <Header
            title="San Diego pool landscaping" //KW
            subtitle="  O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t  "
            image="/contractor.jpg"
            alt="San Diego pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Diego pool landscaping" //KW
            desc="u   d undefined"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="r"
            cardDesc3="o"
            />
            <Approach
            title="San Diego pool landscaping" //KW
            desc="v o   h"
            />
            <Intro
            subtitle="Exceptional San Diego pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="o"
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
        