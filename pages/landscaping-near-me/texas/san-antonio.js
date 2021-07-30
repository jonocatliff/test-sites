
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
            title="San Antonio landscaping near me | We'll Take Care Of Everything" 
            desc="San Antonio landscaping near me: l c"
            canonical={`${props.website}/san-antonio-landscaping-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio landscaping near me" //KW
            />
            <Header
            title="San Antonio landscaping near me" //KW
            subtitle="l c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i t"
            image="/contractor.jpg"
            alt="San Antonio landscaping near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Antonio landscaping near me" //KW
            desc="  n e  "
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="a"
            cardDesc3="a"
            />
            <Approach
            title="San Antonio landscaping near me" //KW
            desc="i i t  "
            />
            <Intro
            subtitle="Exceptional San Antonio landscaping near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r e"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="r"
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
        