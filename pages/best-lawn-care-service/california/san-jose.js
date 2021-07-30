
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
            title="San Jose best lawn care service | We'll Take Care Of Everything" 
            desc="San Jose best lawn care service: r n"
            canonical={`${props.website}/san-jose-best-lawn-care-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose best lawn care service" //KW
            />
            <Header
            title="San Jose best lawn care service" //KW
            subtitle="r n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  u"
            image="/window-installation.jpg"
            alt="San Jose best lawn care service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Jose best lawn care service" //KW
            desc="c n   s"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="b"
            cardDesc3="h"
            />
            <Approach
            title="San Jose best lawn care service" //KW
            desc="u e o o"
            />
            <Intro
            subtitle="Exceptional San Jose best lawn care service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i p"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="r"
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
        