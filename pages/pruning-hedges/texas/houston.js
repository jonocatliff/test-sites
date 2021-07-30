
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
            title="Houston pruning hedges | We'll Take Care Of Everything" 
            desc="Houston pruning hedges:    "
            canonical={`${props.website}/houston-pruning-hedges`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston pruning hedges" //KW
            />
            <Header
            title="Houston pruning hedges" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="l d"
            image="/window-installation.jpg"
            alt="Houston pruning hedges"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Houston pruning hedges" //KW
            desc="a t o undefined"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="v"
            cardDesc3="f"
            />
            <Approach
            title="Houston pruning hedges" //KW
            desc="  p e r"
            />
            <Intro
            subtitle="Exceptional Houston pruning hedges" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a undefined"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="i"
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
        