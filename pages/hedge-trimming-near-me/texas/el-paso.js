
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
            title="El Paso hedge trimming near me | We'll Take Care Of Everything" 
            desc="El Paso hedge trimming near me: o l"
            canonical={`${props.website}/el-paso-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso hedge trimming near me" //KW
            />
            <Header
            title="El Paso hedge trimming near me" //KW
            subtitle="o l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r p"
            image="/window-installations.jpg"
            alt="El Paso hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional El Paso hedge trimming near me" //KW
            desc="r   r  "
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="u"
            cardDesc3="h"
            />
            <Approach
            title="El Paso hedge trimming near me" //KW
            desc="e   n f"
            />
            <Intro
            subtitle="Exceptional El Paso hedge trimming near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n o"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="h"
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
        