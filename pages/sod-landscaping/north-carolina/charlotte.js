
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
            title="Charlotte sod landscaping | We'll Take Care Of Everything" 
            desc="Charlotte sod landscaping: n ."
            canonical={`${props.website}/charlotte-sod-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte sod landscaping" //KW
            />
            <Header
            title="Charlotte sod landscaping" //KW
            subtitle="n ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e  "
            image="/window-washing.jpg"
            alt="Charlotte sod landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Charlotte sod landscaping" //KW
            desc="r r t undefined"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="s"
            cardDesc3="f"
            />
            <Approach
            title="Charlotte sod landscaping" //KW
            desc="o   u t"
            />
            <Intro
            subtitle="Exceptional Charlotte sod landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e undefined"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="P" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        