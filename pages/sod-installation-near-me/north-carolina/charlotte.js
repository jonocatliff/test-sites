
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
            title="Charlotte sod installation near me | We'll Take Care Of Everything" 
            desc="Charlotte sod installation near me: t u"
            canonical={`${props.website}/charlotte-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte sod installation near me" //KW
            />
            <Header
            title="Charlotte sod installation near me" //KW
            subtitle="t u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="y n"
            image="/window-washing.jpg"
            alt="Charlotte sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Charlotte sod installation near me" //KW
            desc="s i a undefined"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="w"
            cardDesc3=" "
            />
            <Approach
            title="Charlotte sod installation near me" //KW
            desc="a r n o"
            />
            <Intro
            subtitle="Exceptional Charlotte sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  undefined"
            cardDesc3="I"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="o"
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
        