
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
            title="San Jose turf care | We'll Take Care Of Everything" 
            desc="San Jose turf care: a u"
            canonical={`${props.website}/san-jose-turf-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose turf care" //KW
            />
            <Header
            title="San Jose turf care" //KW
            subtitle="a u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e n"
            image="/window-installations.jpg"
            alt="San Jose turf care"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Jose turf care" //KW
            desc="y l l undefined"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="d"
            cardDesc3="c"
            />
            <Approach
            title="San Jose turf care" //KW
            desc="e   p v"
            />
            <Intro
            subtitle="Exceptional San Jose turf care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="k"
            cardDesc2="s undefined"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="c"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        