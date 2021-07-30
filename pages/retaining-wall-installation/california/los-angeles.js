
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
            title="Los Angeles retaining wall installation | We'll Take Care Of Everything" 
            desc="Los Angeles retaining wall installation: w t"
            canonical={`${props.website}/los-angeles-retaining-wall-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles retaining wall installation" //KW
            />
            <Header
            title="Los Angeles retaining wall installation" //KW
            subtitle="w t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="t a"
            image="/window-installation.jpg"
            alt="Los Angeles retaining wall installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Los Angeles retaining wall installation" //KW
            desc="w u e undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="Los Angeles retaining wall installation" //KW
            desc="s i c a"
            />
            <Intro
            subtitle="Exceptional Los Angeles retaining wall installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="  undefined"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
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
        