
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
            title="Las Vegas concrete landscaping | We'll Take Care Of Everything" 
            desc="Las Vegas concrete landscaping: w t"
            canonical={`${props.website}/las-vegas-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas concrete landscaping" //KW
            />
            <Header
            title="Las Vegas concrete landscaping" //KW
            subtitle="w t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e o"
            image="/window-installations.jpg"
            alt="Las Vegas concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Las Vegas concrete landscaping" //KW
            desc="o a   p"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Las Vegas concrete landscaping" //KW
            desc=", n l p"
            />
            <Intro
            subtitle="Exceptional Las Vegas concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="  x"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="w"
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
        