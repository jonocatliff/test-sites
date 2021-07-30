
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
            title="El Paso weed control companies near me | We'll Take Care Of Everything" 
            desc="El Paso weed control companies near me: b f"
            canonical={`${props.website}/el-paso-weed-control-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso weed control companies near me" //KW
            />
            <Header
            title="El Paso weed control companies near me" //KW
            subtitle="b f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w  "
            image="/window-installations.jpg"
            alt="El Paso weed control companies near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional El Paso weed control companies near me" //KW
            desc="v     undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="o"
            cardDesc3="l"
            />
            <Approach
            title="El Paso weed control companies near me" //KW
            desc="r s t a"
            />
            <Intro
            subtitle="Exceptional El Paso weed control companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="s undefined"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
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
        