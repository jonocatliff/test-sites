
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
            title="San Francisco front garden landscaping | We'll Take Care Of Everything" 
            desc="San Francisco front garden landscaping: n e"
            canonical={`${props.website}/san-francisco-front-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco front garden landscaping" //KW
            />
            <Header
            title="San Francisco front garden landscaping" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s c"
            image="/window-installations.jpg"
            alt="San Francisco front garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Francisco front garden landscaping" //KW
            desc="t     n"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="n"
            cardDesc3="f"
            />
            <Approach
            title="San Francisco front garden landscaping" //KW
            desc="r   . e"
            />
            <Intro
            subtitle="Exceptional San Francisco front garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="y e"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        