
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
            title="Charlotte patio landscaping | We'll Take Care Of Everything" 
            desc="Charlotte patio landscaping:   v"
            canonical={`${props.website}/charlotte-patio-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte patio landscaping" //KW
            />
            <Header
            title="Charlotte patio landscaping" //KW
            subtitle="  v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="p r"
            image="/window-installations.jpg"
            alt="Charlotte patio landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Charlotte patio landscaping" //KW
            desc=".     undefined"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="d"
            cardDesc3="f"
            />
            <Approach
            title="Charlotte patio landscaping" //KW
            desc="n   s o"
            />
            <Intro
            subtitle="Exceptional Charlotte patio landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="x undefined"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2=" "
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
        