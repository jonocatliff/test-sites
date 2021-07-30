
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
            title="Columbus patio landscaping | We'll Take Care Of Everything" 
            desc="Columbus patio landscaping: i t"
            canonical={`${props.website}/columbus-patio-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus patio landscaping" //KW
            />
            <Header
            title="Columbus patio landscaping" //KW
            subtitle="i t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e  "
            image="/window-installation.jpg"
            alt="Columbus patio landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Columbus patio landscaping" //KW
            desc="e e v undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="v"
            cardDesc3="e"
            />
            <Approach
            title="Columbus patio landscaping" //KW
            desc="w d e  "
            />
            <Intro
            subtitle="Exceptional Columbus patio landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="  undefined"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="g"
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
        