
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
            title="Phoenix retaining wall landscaping | We'll Take Care Of Everything" 
            desc="Phoenix retaining wall landscaping: a  "
            canonical={`${props.website}/phoenix-retaining-wall-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix retaining wall landscaping" //KW
            />
            <Header
            title="Phoenix retaining wall landscaping" //KW
            subtitle="a  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="v f"
            image="/window-installation.jpg"
            alt="Phoenix retaining wall landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Phoenix retaining wall landscaping" //KW
            desc="v k n undefined"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="x"
            cardDesc3="o"
            />
            <Approach
            title="Phoenix retaining wall landscaping" //KW
            desc="e e r t"
            />
            <Intro
            subtitle="Exceptional Phoenix retaining wall landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="i undefined"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="n"
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
        