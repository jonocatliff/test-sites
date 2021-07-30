
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
            title="Portland door glass window replacement | We'll Take Care Of Everything" 
            desc="Portland door glass window replacement:    "
            canonical={`${props.website}/portland-door-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland door glass window replacement" //KW
            />
            <Header
            title="Portland door glass window replacement" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r h"
            image="/window-installations.jpg"
            alt="Portland door glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Portland door glass window replacement" //KW
            desc="n o r p"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Portland door glass window replacement" //KW
            desc="l g u a"
            />
            <Intro
            subtitle="Exceptional Portland door glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="i e"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="i"
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
        