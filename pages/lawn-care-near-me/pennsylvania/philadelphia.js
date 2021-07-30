
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
            title="Philadelphia lawn care near me | We'll Take Care Of Everything" 
            desc="Philadelphia lawn care near me: t l"
            canonical={`${props.website}/philadelphia-lawn-care-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia lawn care near me" //KW
            />
            <Header
            title="Philadelphia lawn care near me" //KW
            subtitle="t l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="y '"
            image="/window-installation.jpg"
            alt="Philadelphia lawn care near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia lawn care near me" //KW
            desc="e   d y"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="f"
            cardDesc3="i"
            />
            <Approach
            title="Philadelphia lawn care near me" //KW
            desc="a l   d"
            />
            <Intro
            subtitle="Exceptional Philadelphia lawn care near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u i"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="n"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        