
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
            title="Toronto mulch companies near me | We'll Take Care Of Everything" 
            desc="Toronto mulch companies near me: .  "
            canonical={`${props.website}/toronto-mulch-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto mulch companies near me" //KW
            />
            <Header
            title="Toronto mulch companies near me" //KW
            subtitle=".  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  d"
            image="/window-installations.jpg"
            alt="Toronto mulch companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Toronto mulch companies near me" //KW
            desc="i o o t"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="o"
            cardDesc3="s"
            />
            <Approach
            title="Toronto mulch companies near me" //KW
            desc="d d i  "
            />
            <Intro
            subtitle="Exceptional Toronto mulch companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="d t"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="p"
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
        