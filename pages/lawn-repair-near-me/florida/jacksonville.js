
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
            title="Jacksonville lawn repair near me | We'll Take Care Of Everything" 
            desc="Jacksonville lawn repair near me:   g"
            canonical={`${props.website}/jacksonville-lawn-repair-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville lawn repair near me" //KW
            />
            <Header
            title="Jacksonville lawn repair near me" //KW
            subtitle="  g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="v e"
            image="/window-washing.jpg"
            alt="Jacksonville lawn repair near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Jacksonville lawn repair near me" //KW
            desc="a   o e"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="y"
            cardDesc3="e"
            />
            <Approach
            title="Jacksonville lawn repair near me" //KW
            desc="e c w i"
            />
            <Intro
            subtitle="Exceptional Jacksonville lawn repair near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n k"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="n"
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
        