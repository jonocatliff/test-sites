
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
            title="Vancouver lawn mowing near me | We'll Take Care Of Everything" 
            desc="Vancouver lawn mowing near me: n e"
            canonical={`${props.website}/vancouver-lawn-mowing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver lawn mowing near me" //KW
            />
            <Header
            title="Vancouver lawn mowing near me" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  d"
            image="/window-installation.jpg"
            alt="Vancouver lawn mowing near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Vancouver lawn mowing near me" //KW
            desc="  t e d"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="g"
            cardDesc3="n"
            />
            <Approach
            title="Vancouver lawn mowing near me" //KW
            desc="c o a p"
            />
            <Intro
            subtitle="Exceptional Vancouver lawn mowing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t e"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        