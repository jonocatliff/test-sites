
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
            title="Jacksonville gardeners | We'll Take Care Of Everything" 
            desc="Jacksonville gardeners: A o"
            canonical={`${props.website}/jacksonville-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville gardeners" //KW
            />
            <Header
            title="Jacksonville gardeners" //KW
            subtitle="A o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o h"
            image="/contractor.jpg"
            alt="Jacksonville gardeners"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Jacksonville gardeners" //KW
            desc="d o o a"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Jacksonville gardeners" //KW
            desc="p d y o"
            />
            <Intro
            subtitle="Exceptional Jacksonville gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="w r"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="p"
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
        