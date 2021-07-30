
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
            title="Oshawa lawn care and landscaping | We'll Take Care Of Everything" 
            desc="Oshawa lawn care and landscaping: t h"
            canonical={`${props.website}/oshawa-lawn-care-and-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa lawn care and landscaping" //KW
            />
            <Header
            title="Oshawa lawn care and landscaping" //KW
            subtitle="t h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e i"
            image="/contractor.jpg"
            alt="Oshawa lawn care and landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Oshawa lawn care and landscaping" //KW
            desc="u   c t"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="u"
            cardDesc3="h"
            />
            <Approach
            title="Oshawa lawn care and landscaping" //KW
            desc="n   u s"
            />
            <Intro
            subtitle="Exceptional Oshawa lawn care and landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="n i"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="t"
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
        