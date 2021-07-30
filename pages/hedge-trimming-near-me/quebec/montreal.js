
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
            title="Montreal hedge trimming near me | We'll Take Care Of Everything" 
            desc="Montreal hedge trimming near me: d r"
            canonical={`${props.website}/montreal-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal hedge trimming near me" //KW
            />
            <Header
            title="Montreal hedge trimming near me" //KW
            subtitle="d r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r n"
            image="/window-installations.jpg"
            alt="Montreal hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Montreal hedge trimming near me" //KW
            desc="o e t c"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Montreal hedge trimming near me" //KW
            desc="o e   w"
            />
            <Intro
            subtitle="Exceptional Montreal hedge trimming near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="k"
            cardDesc2="e r"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="w"
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
        