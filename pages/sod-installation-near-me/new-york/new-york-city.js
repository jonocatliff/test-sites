
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
            title="New York City sod installation near me | We'll Take Care Of Everything" 
            desc="New York City sod installation near me: t o"
            canonical={`${props.website}/new-york-city-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City sod installation near me" //KW
            />
            <Header
            title="New York City sod installation near me" //KW
            subtitle="t o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a d"
            image="/window-installation.jpg"
            alt="New York City sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional New York City sod installation near me" //KW
            desc="s e t undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="New York City sod installation near me" //KW
            desc="t p w o"
            />
            <Intro
            subtitle="Exceptional New York City sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="c undefined"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2=" "
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
        