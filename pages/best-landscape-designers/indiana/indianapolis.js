
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
            title="Indianapolis best landscape designers | We'll Take Care Of Everything" 
            desc="Indianapolis best landscape designers: f c"
            canonical={`${props.website}/indianapolis-best-landscape-designers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis best landscape designers" //KW
            />
            <Header
            title="Indianapolis best landscape designers" //KW
            subtitle="f c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e d"
            image="/window-installation.jpg"
            alt="Indianapolis best landscape designers"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Indianapolis best landscape designers" //KW
            desc="p c e h"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="i"
            cardDesc3="u"
            />
            <Approach
            title="Indianapolis best landscape designers" //KW
            desc="  c x c"
            />
            <Intro
            subtitle="Exceptional Indianapolis best landscape designers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="  r"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        