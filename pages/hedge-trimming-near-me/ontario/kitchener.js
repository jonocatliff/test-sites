
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
            title="Kitchener hedge trimming near me | We'll Take Care Of Everything" 
            desc="Kitchener hedge trimming near me: o t"
            canonical={`${props.website}/kitchener-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener hedge trimming near me" //KW
            />
            <Header
            title="Kitchener hedge trimming near me" //KW
            subtitle="o t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="n  "
            image="/window-installations.jpg"
            alt="Kitchener hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Kitchener hedge trimming near me" //KW
            desc="t s o t"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="Kitchener hedge trimming near me" //KW
            desc="d   a e"
            />
            <Intro
            subtitle="Exceptional Kitchener hedge trimming near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="W s"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="e"
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
        