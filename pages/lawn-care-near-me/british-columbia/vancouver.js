
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
            title="Vancouver lawn care near me | We'll Take Care Of Everything" 
            desc="Vancouver lawn care near me: f d"
            canonical={`${props.website}/vancouver-lawn-care-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver lawn care near me" //KW
            />
            <Header
            title="Vancouver lawn care near me" //KW
            subtitle="f d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e d"
            image="/contractor.jpg"
            alt="Vancouver lawn care near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver lawn care near me" //KW
            desc="t   e c"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="I"
            />
            <Approach
            title="Vancouver lawn care near me" //KW
            desc="r   p ."
            />
            <Intro
            subtitle="Exceptional Vancouver lawn care near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="l t"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2=" "
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
        