
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
            title="Phoenix sod installation near me | We'll Take Care Of Everything" 
            desc="Phoenix sod installation near me:    "
            canonical={`${props.website}/phoenix-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix sod installation near me" //KW
            />
            <Header
            title="Phoenix sod installation near me" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n r"
            image="/contractor.jpg"
            alt="Phoenix sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Phoenix sod installation near me" //KW
            desc="  A   undefined"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Phoenix sod installation near me" //KW
            desc="t c u d"
            />
            <Intro
            subtitle="Exceptional Phoenix sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o undefined"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="l"
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
        