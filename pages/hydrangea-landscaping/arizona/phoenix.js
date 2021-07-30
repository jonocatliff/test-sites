
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
            title="Phoenix hydrangea landscaping | We'll Take Care Of Everything" 
            desc="Phoenix hydrangea landscaping: o ’"
            canonical={`${props.website}/phoenix-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix hydrangea landscaping" //KW
            />
            <Header
            title="Phoenix hydrangea landscaping" //KW
            subtitle="o ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  p"
            image="/contractor.jpg"
            alt="Phoenix hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Phoenix hydrangea landscaping" //KW
            desc="v   s u"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Phoenix hydrangea landscaping" //KW
            desc="e e w d"
            />
            <Intro
            subtitle="Exceptional Phoenix hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="r y"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="r"
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
        