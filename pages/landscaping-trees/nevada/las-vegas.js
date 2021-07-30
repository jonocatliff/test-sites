
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
            title="Las Vegas landscaping trees | We'll Take Care Of Everything" 
            desc="Las Vegas landscaping trees: t w"
            canonical={`${props.website}/las-vegas-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas landscaping trees" //KW
            />
            <Header
            title="Las Vegas landscaping trees" //KW
            subtitle="t w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e h"
            image="/window-installation.jpg"
            alt="Las Vegas landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Las Vegas landscaping trees" //KW
            desc="s   c  "
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Las Vegas landscaping trees" //KW
            desc="o u y f"
            />
            <Intro
            subtitle="Exceptional Las Vegas landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="t  "
            cardDesc3="I"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="i"
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
        