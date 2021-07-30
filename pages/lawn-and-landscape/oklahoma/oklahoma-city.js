
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
            title="Oklahoma City lawn and landscape | We'll Take Care Of Everything" 
            desc="Oklahoma City lawn and landscape: o Y"
            canonical={`${props.website}/oklahoma-city-lawn-and-landscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City lawn and landscape" //KW
            />
            <Header
            title="Oklahoma City lawn and landscape" //KW
            subtitle="o Y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n  "
            image="/window-installation.jpg"
            alt="Oklahoma City lawn and landscape"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oklahoma City lawn and landscape" //KW
            desc="  e o  "
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="r"
            cardDesc3="s"
            />
            <Approach
            title="Oklahoma City lawn and landscape" //KW
            desc="c t t e"
            />
            <Intro
            subtitle="Exceptional Oklahoma City lawn and landscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c l"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="n"
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
        