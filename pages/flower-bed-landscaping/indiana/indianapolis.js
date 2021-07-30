
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
            title="Indianapolis flower bed landscaping | We'll Take Care Of Everything" 
            desc="Indianapolis flower bed landscaping: d  "
            canonical={`${props.website}/indianapolis-flower-bed-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis flower bed landscaping" //KW
            />
            <Header
            title="Indianapolis flower bed landscaping" //KW
            subtitle="d  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  l"
            image="/window-installations.jpg"
            alt="Indianapolis flower bed landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Indianapolis flower bed landscaping" //KW
            desc="t i r u"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="r"
            cardDesc3="c"
            />
            <Approach
            title="Indianapolis flower bed landscaping" //KW
            desc="  -   e"
            />
            <Intro
            subtitle="Exceptional Indianapolis flower bed landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="s n"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="t"
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
        