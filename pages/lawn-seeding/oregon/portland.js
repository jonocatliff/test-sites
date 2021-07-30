
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
            title="Portland lawn seeding | We'll Take Care Of Everything" 
            desc="Portland lawn seeding: v  "
            canonical={`${props.website}/portland-lawn-seeding`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland lawn seeding" //KW
            />
            <Header
            title="Portland lawn seeding" //KW
            subtitle="v  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="i u"
            image="/window-washing.jpg"
            alt="Portland lawn seeding"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Portland lawn seeding" //KW
            desc="n f z r"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="d"
            cardDesc3="p"
            />
            <Approach
            title="Portland lawn seeding" //KW
            desc="e m a s"
            />
            <Intro
            subtitle="Exceptional Portland lawn seeding" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r h"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="u"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        