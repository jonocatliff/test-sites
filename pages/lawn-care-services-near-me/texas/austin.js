
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
            title="Austin lawn care services near me | We'll Take Care Of Everything" 
            desc="Austin lawn care services near me: s  "
            canonical={`${props.website}/austin-lawn-care-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin lawn care services near me" //KW
            />
            <Header
            title="Austin lawn care services near me" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o f"
            image="/window-installations.jpg"
            alt="Austin lawn care services near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Austin lawn care services near me" //KW
            desc="l   o f"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Austin lawn care services near me" //KW
            desc="  y h t"
            />
            <Intro
            subtitle="Exceptional Austin lawn care services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="e u"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="j"
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
        