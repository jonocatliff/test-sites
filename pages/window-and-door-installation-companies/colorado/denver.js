
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
            title="Denver window and door installation companies | We'll Take Care Of Everything" 
            desc="Denver window and door installation companies: u  "
            canonical={`${props.website}/denver-window-and-door-installation-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver window and door installation companies" //KW
            />
            <Header
            title="Denver window and door installation companies" //KW
            subtitle="u  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a e"
            image="/contractor.jpg"
            alt="Denver window and door installation companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Denver window and door installation companies" //KW
            desc="l i . e"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="Denver window and door installation companies" //KW
            desc="f t i a"
            />
            <Intro
            subtitle="Exceptional Denver window and door installation companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="s"
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
        