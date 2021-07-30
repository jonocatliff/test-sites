
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
            title="Tucson lawn maintenance near me | We'll Take Care Of Everything" 
            desc="Tucson lawn maintenance near me: f n"
            canonical={`${props.website}/tucson-lawn-maintenance-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson lawn maintenance near me" //KW
            />
            <Header
            title="Tucson lawn maintenance near me" //KW
            subtitle="f n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a u"
            image="/contractor.jpg"
            alt="Tucson lawn maintenance near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Tucson lawn maintenance near me" //KW
            desc="t p s l"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="s"
            cardDesc3="h"
            />
            <Approach
            title="Tucson lawn maintenance near me" //KW
            desc="  d o e"
            />
            <Intro
            subtitle="Exceptional Tucson lawn maintenance near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="a n"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="i"
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
        