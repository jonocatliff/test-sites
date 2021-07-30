
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
            title="Oshawa professional landscaping | We'll Take Care Of Everything" 
            desc="Oshawa professional landscaping: o  "
            canonical={`${props.website}/oshawa-professional-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa professional landscaping" //KW
            />
            <Header
            title="Oshawa professional landscaping" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s i"
            image="/contractor.jpg"
            alt="Oshawa professional landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oshawa professional landscaping" //KW
            desc="o y v undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="r"
            cardDesc3="h"
            />
            <Approach
            title="Oshawa professional landscaping" //KW
            desc="  f t e"
            />
            <Intro
            subtitle="Exceptional Oshawa professional landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o undefined"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="j"
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
        