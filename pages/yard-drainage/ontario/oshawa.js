
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
            title="Oshawa yard drainage | We'll Take Care Of Everything" 
            desc="Oshawa yard drainage: a h"
            canonical={`${props.website}/oshawa-yard-drainage`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa yard drainage" //KW
            />
            <Header
            title="Oshawa yard drainage" //KW
            subtitle="a h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="l ."
            image="/window-washing.jpg"
            alt="Oshawa yard drainage"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oshawa yard drainage" //KW
            desc="c w   undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Oshawa yard drainage" //KW
            desc="p . o w"
            />
            <Intro
            subtitle="Exceptional Oshawa yard drainage" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i undefined"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="W"
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
        