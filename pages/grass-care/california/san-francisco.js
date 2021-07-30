
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
            title="San Francisco grass care | We'll Take Care Of Everything" 
            desc="San Francisco grass care: t i"
            canonical={`${props.website}/san-francisco-grass-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco grass care" //KW
            />
            <Header
            title="San Francisco grass care" //KW
            subtitle="t i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  c"
            image="/window-installations.jpg"
            alt="San Francisco grass care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Francisco grass care" //KW
            desc="e   n s"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="s"
            cardDesc3="e"
            />
            <Approach
            title="San Francisco grass care" //KW
            desc="u p r  "
            />
            <Intro
            subtitle="Exceptional San Francisco grass care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="a r"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="-"
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
        