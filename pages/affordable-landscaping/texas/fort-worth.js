
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
            title="Fort Worth affordable landscaping | We'll Take Care Of Everything" 
            desc="Fort Worth affordable landscaping: r s"
            canonical={`${props.website}/fort-worth-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth affordable landscaping" //KW
            />
            <Header
            title="Fort Worth affordable landscaping" //KW
            subtitle="r s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r i"
            image="/contractor.jpg"
            alt="Fort Worth affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fort Worth affordable landscaping" //KW
            desc="d o   u"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="I"
            />
            <Approach
            title="Fort Worth affordable landscaping" //KW
            desc="o l   e"
            />
            <Intro
            subtitle="Exceptional Fort Worth affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e e"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="v"
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
        