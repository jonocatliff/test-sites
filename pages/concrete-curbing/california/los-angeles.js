
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
            title="Los Angeles concrete curbing | We'll Take Care Of Everything" 
            desc="Los Angeles concrete curbing: s h"
            canonical={`${props.website}/los-angeles-concrete-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles concrete curbing" //KW
            />
            <Header
            title="Los Angeles concrete curbing" //KW
            subtitle="s h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r e"
            image="/contractor.jpg"
            alt="Los Angeles concrete curbing"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Los Angeles concrete curbing" //KW
            desc="e a r d"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="k"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="g"
            cardDesc3="n"
            />
            <Approach
            title="Los Angeles concrete curbing" //KW
            desc=", - n a"
            />
            <Intro
            subtitle="Exceptional Los Angeles concrete curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="r s"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="'" //KW
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
        