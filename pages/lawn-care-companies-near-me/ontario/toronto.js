
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
            title="Toronto lawn care companies near me | We'll Take Care Of Everything" 
            desc="Toronto lawn care companies near me: s s"
            canonical={`${props.website}/toronto-lawn-care-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto lawn care companies near me" //KW
            />
            <Header
            title="Toronto lawn care companies near me" //KW
            subtitle="s s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a m"
            image="/window-installations.jpg"
            alt="Toronto lawn care companies near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Toronto lawn care companies near me" //KW
            desc="u u s e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="n"
            cardDesc3="o"
            />
            <Approach
            title="Toronto lawn care companies near me" //KW
            desc="  b , w"
            />
            <Intro
            subtitle="Exceptional Toronto lawn care companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  s"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="o"
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
        