
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
            title="Oshawa lawn service companies | We'll Take Care Of Everything" 
            desc="Oshawa lawn service companies: s u"
            canonical={`${props.website}/oshawa-lawn-service-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa lawn service companies" //KW
            />
            <Header
            title="Oshawa lawn service companies" //KW
            subtitle="s u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i e"
            image="/window-installations.jpg"
            alt="Oshawa lawn service companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oshawa lawn service companies" //KW
            desc="d o t a"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="i"
            cardDesc3="w"
            />
            <Approach
            title="Oshawa lawn service companies" //KW
            desc="c v e r"
            />
            <Intro
            subtitle="Exceptional Oshawa lawn service companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="r e"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="r"
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
        