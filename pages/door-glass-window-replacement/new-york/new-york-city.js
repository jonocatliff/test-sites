
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
            title="New York City door glass window replacement | We'll Take Care Of Everything" 
            desc="New York City door glass window replacement: t a"
            canonical={`${props.website}/new-york-city-door-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City door glass window replacement" //KW
            />
            <Header
            title="New York City door glass window replacement" //KW
            subtitle="t a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="t e"
            image="/window-washing.jpg"
            alt="New York City door glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional New York City door glass window replacement" //KW
            desc="n o . w"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="r"
            cardDesc3="h"
            />
            <Approach
            title="New York City door glass window replacement" //KW
            desc="w i w ."
            />
            <Intro
            subtitle="Exceptional New York City door glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="s s"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="O" //KW
            desc2="s"
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
        