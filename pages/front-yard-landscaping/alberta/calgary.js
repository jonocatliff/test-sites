
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
            title="Calgary front yard landscaping | We'll Take Care Of Everything" 
            desc="Calgary front yard landscaping: i h"
            canonical={`${props.website}/calgary-front-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary front yard landscaping" //KW
            />
            <Header
            title="Calgary front yard landscaping" //KW
            subtitle="i h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t a"
            image="/window-washing.jpg"
            alt="Calgary front yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Calgary front yard landscaping" //KW
            desc="r o a i"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Calgary front yard landscaping" //KW
            desc="t e   e"
            />
            <Intro
            subtitle="Exceptional Calgary front yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="x s"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="f"
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
        