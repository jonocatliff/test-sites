
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
            title="Toronto hedge cutting | We'll Take Care Of Everything" 
            desc="Toronto hedge cutting: i l"
            canonical={`${props.website}/toronto-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto hedge cutting" //KW
            />
            <Header
            title="Toronto hedge cutting" //KW
            subtitle="i l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d s"
            image="/window-installations.jpg"
            alt="Toronto hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Toronto hedge cutting" //KW
            desc="t e a m"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="t"
            cardDesc3="o"
            />
            <Approach
            title="Toronto hedge cutting" //KW
            desc="t o w  "
            />
            <Intro
            subtitle="Exceptional Toronto hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="o"
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
        