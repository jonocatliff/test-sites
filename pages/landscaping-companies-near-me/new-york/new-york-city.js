
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
            title="New York City landscaping companies near me | We'll Take Care Of Everything" 
            desc="New York City landscaping companies near me: r i"
            canonical={`${props.website}/new-york-city-landscaping-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City landscaping companies near me" //KW
            />
            <Header
            title="New York City landscaping companies near me" //KW
            subtitle="r i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="A d"
            image="/window-installation.jpg"
            alt="New York City landscaping companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional New York City landscaping companies near me" //KW
            desc="  i d  "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="New York City landscaping companies near me" //KW
            desc="t w n t"
            />
            <Intro
            subtitle="Exceptional New York City landscaping companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i f"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="a"
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
        