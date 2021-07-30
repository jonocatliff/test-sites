
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
            title="Quebec City lawn care companies near me | We'll Take Care Of Everything" 
            desc="Quebec City lawn care companies near me: o i"
            canonical={`${props.website}/quebec-city-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City lawn care companies near me" //KW
            />
            <Header
            title="Quebec City lawn care companies near me" //KW
            subtitle="o i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="u t"
            image="/window-installations.jpg"
            alt="Quebec City lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Quebec City lawn care companies near me" //KW
            desc="r f v  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2="t"
            cardDesc3="m"
            />
            <Approach
            title="Quebec City lawn care companies near me" //KW
            desc="l   a i"
            />
            <Intro
            subtitle="Exceptional Quebec City lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="  w"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="s"
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
        