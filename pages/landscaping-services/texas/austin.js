
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
            title="Austin landscaping services | We'll Take Care Of Everything" 
            desc="Austin landscaping services: w e"
            canonical={`${props.website}/austin-landscaping-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin landscaping services" //KW
            />
            <Header
            title="Austin landscaping services" //KW
            subtitle="w e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="W  "
            image="/window-installations.jpg"
            alt="Austin landscaping services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Austin landscaping services" //KW
            desc="l o   o"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="o"
            cardDesc3=" "
            />
            <Approach
            title="Austin landscaping services" //KW
            desc="s   r p"
            />
            <Intro
            subtitle="Exceptional Austin landscaping services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="y m"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="e"
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
        