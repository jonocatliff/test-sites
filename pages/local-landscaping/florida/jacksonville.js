
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
            title="Jacksonville local landscaping | We'll Take Care Of Everything" 
            desc="Jacksonville local landscaping: b o"
            canonical={`${props.website}/jacksonville-local-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville local landscaping" //KW
            />
            <Header
            title="Jacksonville local landscaping" //KW
            subtitle="b o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="f h"
            image="/window-installations.jpg"
            alt="Jacksonville local landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Jacksonville local landscaping" //KW
            desc="o d o w"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="w"
            cardDesc3="r"
            />
            <Approach
            title="Jacksonville local landscaping" //KW
            desc="t m   n"
            />
            <Intro
            subtitle="Exceptional Jacksonville local landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="."
            cardDesc2="u a"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
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
        