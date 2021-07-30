
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
            title="Chicago lawn care companies near me | We'll Take Care Of Everything" 
            desc="Chicago lawn care companies near me: t e"
            canonical={`${props.website}/chicago-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago lawn care companies near me" //KW
            />
            <Header
            title="Chicago lawn care companies near me" //KW
            subtitle="t e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r i"
            image="/window-installation.jpg"
            alt="Chicago lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Chicago lawn care companies near me" //KW
            desc="v w i a"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="o"
            cardDesc3="d"
            />
            <Approach
            title="Chicago lawn care companies near me" //KW
            desc="w a t o"
            />
            <Intro
            subtitle="Exceptional Chicago lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="b e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2=","
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
        