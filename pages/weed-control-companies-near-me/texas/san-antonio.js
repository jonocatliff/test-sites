
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
            title="San Antonio weed control companies near me | We'll Take Care Of Everything" 
            desc="San Antonio weed control companies near me: t h"
            canonical={`${props.website}/san-antonio-weed-control-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio weed control companies near me" //KW
            />
            <Header
            title="San Antonio weed control companies near me" //KW
            subtitle="t h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r t"
            image="/window-washing.jpg"
            alt="San Antonio weed control companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Antonio weed control companies near me" //KW
            desc="e n h undefined"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="San Antonio weed control companies near me" //KW
            desc="  a e ."
            />
            <Intro
            subtitle="Exceptional San Antonio weed control companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="c undefined"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="g"
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
        