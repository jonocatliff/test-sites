
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
            title="Los Angeles lawn care companies near me | We'll Take Care Of Everything" 
            desc="Los Angeles lawn care companies near me: a c"
            canonical={`${props.website}/los-angeles-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles lawn care companies near me" //KW
            />
            <Header
            title="Los Angeles lawn care companies near me" //KW
            subtitle="a c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="P a"
            image="/contractor.jpg"
            alt="Los Angeles lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Los Angeles lawn care companies near me" //KW
            desc="r t e m"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="c"
            cardDesc3="n"
            />
            <Approach
            title="Los Angeles lawn care companies near me" //KW
            desc="o e   t"
            />
            <Intro
            subtitle="Exceptional Los Angeles lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="i c"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="s"
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
        