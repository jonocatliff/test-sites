
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
            title="Phoenix lawn repair near me | We'll Take Care Of Everything" 
            desc="Phoenix lawn repair near me: t t"
            canonical={`${props.website}/phoenix-lawn-repair-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix lawn repair near me" //KW
            />
            <Header
            title="Phoenix lawn repair near me" //KW
            subtitle="t t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="v i"
            image="/window-installations.jpg"
            alt="Phoenix lawn repair near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Phoenix lawn repair near me" //KW
            desc="  s    "
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="o"
            cardDesc3="f"
            />
            <Approach
            title="Phoenix lawn repair near me" //KW
            desc="n r d ."
            />
            <Intro
            subtitle="Exceptional Phoenix lawn repair near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="o f"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="j"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        