
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
            title="Las Vegas landscaping companies | We'll Take Care Of Everything" 
            desc="Las Vegas landscaping companies: e l"
            canonical={`${props.website}/las-vegas-landscaping-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas landscaping companies" //KW
            />
            <Header
            title="Las Vegas landscaping companies" //KW
            subtitle="e l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  r"
            image="/window-installation.jpg"
            alt="Las Vegas landscaping companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Las Vegas landscaping companies" //KW
            desc="y   t d"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Las Vegas landscaping companies" //KW
            desc="t v f r"
            />
            <Intro
            subtitle="Exceptional Las Vegas landscaping companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i w"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="c"
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
        