
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
            title="San Jose affordable landscaping | We'll Take Care Of Everything" 
            desc="San Jose affordable landscaping: t i"
            canonical={`${props.website}/san-jose-affordable-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose affordable landscaping" //KW
            />
            <Header
            title="San Jose affordable landscaping" //KW
            subtitle="t i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="w t"
            image="/window-washing.jpg"
            alt="San Jose affordable landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Jose affordable landscaping" //KW
            desc="n i r t"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="w"
            cardDesc3="W"
            />
            <Approach
            title="San Jose affordable landscaping" //KW
            desc="i     h"
            />
            <Intro
            subtitle="Exceptional San Jose affordable landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="p l"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="o"
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
        