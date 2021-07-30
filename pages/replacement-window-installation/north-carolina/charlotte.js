
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
            title="Charlotte replacement window installation | We'll Take Care Of Everything" 
            desc="Charlotte replacement window installation: P u"
            canonical={`${props.website}/charlotte-replacement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte replacement window installation" //KW
            />
            <Header
            title="Charlotte replacement window installation" //KW
            subtitle="P u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t n"
            image="/window-installations.jpg"
            alt="Charlotte replacement window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Charlotte replacement window installation" //KW
            desc="t w o m"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="r"
            cardDesc3="l"
            />
            <Approach
            title="Charlotte replacement window installation" //KW
            desc="g l   t"
            />
            <Intro
            subtitle="Exceptional Charlotte replacement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s e"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="a"
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
        