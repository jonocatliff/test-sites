
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
            title="Fresno pool landscaping | We'll Take Care Of Everything" 
            desc="Fresno pool landscaping: f  "
            canonical={`${props.website}/fresno-pool-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno pool landscaping" //KW
            />
            <Header
            title="Fresno pool landscaping" //KW
            subtitle="f  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="w  "
            image="/contractor.jpg"
            alt="Fresno pool landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fresno pool landscaping" //KW
            desc="e   o undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="o"
            cardDesc3="e"
            />
            <Approach
            title="Fresno pool landscaping" //KW
            desc="u   t h"
            />
            <Intro
            subtitle="Exceptional Fresno pool landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="  undefined"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="i"
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
        