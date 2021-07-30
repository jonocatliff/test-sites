
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
            title="Portland backyard landscaping | We'll Take Care Of Everything" 
            desc="Portland backyard landscaping: s i"
            canonical={`${props.website}/portland-backyard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland backyard landscaping" //KW
            />
            <Header
            title="Portland backyard landscaping" //KW
            subtitle="s i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i h"
            image="/window-installations.jpg"
            alt="Portland backyard landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Portland backyard landscaping" //KW
            desc="d a a s"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="u"
            cardDesc3=" "
            />
            <Approach
            title="Portland backyard landscaping" //KW
            desc="y h g h"
            />
            <Intro
            subtitle="Exceptional Portland backyard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="p s"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="i"
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
        