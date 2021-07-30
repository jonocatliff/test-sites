
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
            title="Halifax lawn care and landscaping | We'll Take Care Of Everything" 
            desc="Halifax lawn care and landscaping: i y"
            canonical={`${props.website}/halifax-lawn-care-and-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax lawn care and landscaping" //KW
            />
            <Header
            title="Halifax lawn care and landscaping" //KW
            subtitle="i y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s  "
            image="/contractor.jpg"
            alt="Halifax lawn care and landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Halifax lawn care and landscaping" //KW
            desc="P e m t"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="o"
            cardDesc3="e"
            />
            <Approach
            title="Halifax lawn care and landscaping" //KW
            desc="p w t o"
            />
            <Intro
            subtitle="Exceptional Halifax lawn care and landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="l a"
            cardDesc3="o"
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
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        