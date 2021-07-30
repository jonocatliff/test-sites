
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
            title="Toronto home window installation near me | We'll Take Care Of Everything" 
            desc="Toronto home window installation near me: l a"
            canonical={`${props.website}/toronto-home-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto home window installation near me" //KW
            />
            <Header
            title="Toronto home window installation near me" //KW
            subtitle="l a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="p s"
            image="/window-installations.jpg"
            alt="Toronto home window installation near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Toronto home window installation near me" //KW
            desc="a u s o"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="g"
            cardDesc3="r"
            />
            <Approach
            title="Toronto home window installation near me" //KW
            desc="e b t  "
            />
            <Intro
            subtitle="Exceptional Toronto home window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e i"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="l"
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
        