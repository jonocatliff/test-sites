
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
            title="Philadelphia natural lawn care | We'll Take Care Of Everything" 
            desc="Philadelphia natural lawn care: w u"
            canonical={`${props.website}/philadelphia-natural-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia natural lawn care" //KW
            />
            <Header
            title="Philadelphia natural lawn care" //KW
            subtitle="w u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  '"
            image="/contractor.jpg"
            alt="Philadelphia natural lawn care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Philadelphia natural lawn care" //KW
            desc="t   r e"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="r"
            cardDesc3="t"
            />
            <Approach
            title="Philadelphia natural lawn care" //KW
            desc="m o l h"
            />
            <Intro
            subtitle="Exceptional Philadelphia natural lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c undefined"
            cardDesc3="P"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="s"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        