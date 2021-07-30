
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
            title="Oklahoma City affordable landscaping | We'll Take Care Of Everything" 
            desc="Oklahoma City affordable landscaping: e  "
            canonical={`${props.website}/oklahoma-city-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City affordable landscaping" //KW
            />
            <Header
            title="Oklahoma City affordable landscaping" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  i"
            image="/contractor.jpg"
            alt="Oklahoma City affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Oklahoma City affordable landscaping" //KW
            desc="a b   c"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="O"
            cardDesc2="."
            cardDesc3="P"
            />
            <Approach
            title="Oklahoma City affordable landscaping" //KW
            desc="w f t s"
            />
            <Intro
            subtitle="Exceptional Oklahoma City affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="o o"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="I" //KW
            desc2="s"
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
        