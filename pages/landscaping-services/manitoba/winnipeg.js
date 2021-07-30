
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
            title="Winnipeg landscaping services | We'll Take Care Of Everything" 
            desc="Winnipeg landscaping services: i u"
            canonical={`${props.website}/winnipeg-landscaping-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg landscaping services" //KW
            />
            <Header
            title="Winnipeg landscaping services" //KW
            subtitle="i u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r t"
            image="/contractor.jpg"
            alt="Winnipeg landscaping services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Winnipeg landscaping services" //KW
            desc="b   k e"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="q"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="w"
            cardDesc3="u"
            />
            <Approach
            title="Winnipeg landscaping services" //KW
            desc="  r r  "
            />
            <Intro
            subtitle="Exceptional Winnipeg landscaping services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e r"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
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
        