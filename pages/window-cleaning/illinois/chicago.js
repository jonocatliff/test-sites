
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
            title="Chicago window cleaning | We'll Take Care Of Everything" 
            desc="Chicago window cleaning: t o"
            canonical={`${props.website}/chicago-window-cleaning`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago window cleaning" //KW
            />
            <Header
            title="Chicago window cleaning" //KW
            subtitle="t o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e e"
            image="/window-installation.jpg"
            alt="Chicago window cleaning"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Chicago window cleaning" //KW
            desc="r l p f"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="m"
            cardDesc2="n"
            cardDesc3="i"
            />
            <Approach
            title="Chicago window cleaning" //KW
            desc="t c e  "
            />
            <Intro
            subtitle="Exceptional Chicago window cleaning" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i  "
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="l"
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
        