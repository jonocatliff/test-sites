
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
            title="Washington DC best landscape designers | We'll Take Care Of Everything" 
            desc="Washington DC best landscape designers: A d"
            canonical={`${props.website}/washington-dc-best-landscape-designers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC best landscape designers" //KW
            />
            <Header
            title="Washington DC best landscape designers" //KW
            subtitle="A d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r g"
            image="/window-washing.jpg"
            alt="Washington DC best landscape designers"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Washington DC best landscape designers" //KW
            desc="t e t l"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="t"
            cardDesc3="r"
            />
            <Approach
            title="Washington DC best landscape designers" //KW
            desc="l a n b"
            />
            <Intro
            subtitle="Exceptional Washington DC best landscape designers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="l l"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="b"
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
        