
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
            title="Calgary outdoor landscaping | We'll Take Care Of Everything" 
            desc="Calgary outdoor landscaping: s e"
            canonical={`${props.website}/calgary-outdoor-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary outdoor landscaping" //KW
            />
            <Header
            title="Calgary outdoor landscaping" //KW
            subtitle="s e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n p"
            image="/window-installations.jpg"
            alt="Calgary outdoor landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Calgary outdoor landscaping" //KW
            desc="l n   undefined"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="w"
            cardDesc3="a"
            />
            <Approach
            title="Calgary outdoor landscaping" //KW
            desc="P   i r"
            />
            <Intro
            subtitle="Exceptional Calgary outdoor landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2=", undefined"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="d"
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
        