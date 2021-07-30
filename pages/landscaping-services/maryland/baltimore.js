
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
            title="Baltimore landscaping services | We'll Take Care Of Everything" 
            desc="Baltimore landscaping services: p a"
            canonical={`${props.website}/baltimore-landscaping-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore landscaping services" //KW
            />
            <Header
            title="Baltimore landscaping services" //KW
            subtitle="p a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="P k"
            image="/window-installations.jpg"
            alt="Baltimore landscaping services"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Baltimore landscaping services" //KW
            desc="I u o d"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="i"
            cardDesc3="n"
            />
            <Approach
            title="Baltimore landscaping services" //KW
            desc="a d e t"
            />
            <Intro
            subtitle="Exceptional Baltimore landscaping services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="s  "
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="s"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        