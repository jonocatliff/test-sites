
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
            title="Ottowa replacement window installation | We'll Take Care Of Everything" 
            desc="Ottowa replacement window installation: W a"
            canonical={`${props.website}/ottowa-replacement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa replacement window installation" //KW
            />
            <Header
            title="Ottowa replacement window installation" //KW
            subtitle="W a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a e"
            image="/window-washing.jpg"
            alt="Ottowa replacement window installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Ottowa replacement window installation" //KW
            desc="s y    "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="u"
            />
            <Approach
            title="Ottowa replacement window installation" //KW
            desc="n t t a"
            />
            <Intro
            subtitle="Exceptional Ottowa replacement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="e  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
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
        