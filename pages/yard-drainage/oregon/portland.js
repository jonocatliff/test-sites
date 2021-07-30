
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
            title="Portland yard drainage | We'll Take Care Of Everything" 
            desc="Portland yard drainage:   o"
            canonical={`${props.website}/portland-yard-drainage`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland yard drainage" //KW
            />
            <Header
            title="Portland yard drainage" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="W t"
            image="/window-installation.jpg"
            alt="Portland yard drainage"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Portland yard drainage" //KW
            desc=".   i undefined"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="n"
            cardDesc3="c"
            />
            <Approach
            title="Portland yard drainage" //KW
            desc="P c d t"
            />
            <Intro
            subtitle="Exceptional Portland yard drainage" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i undefined"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="p"
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
        