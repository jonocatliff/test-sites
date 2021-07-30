
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
            title="Brampton affordable landscaping | We'll Take Care Of Everything" 
            desc="Brampton affordable landscaping:   e"
            canonical={`${props.website}/brampton-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton affordable landscaping" //KW
            />
            <Header
            title="Brampton affordable landscaping" //KW
            subtitle="  e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e e"
            image="/window-installations.jpg"
            alt="Brampton affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Brampton affordable landscaping" //KW
            desc="l s n m"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="t"
            cardDesc3="o"
            />
            <Approach
            title="Brampton affordable landscaping" //KW
            desc="o w e f"
            />
            <Intro
            subtitle="Exceptional Brampton affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r ’"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2=" "
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
        