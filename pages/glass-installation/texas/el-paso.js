
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
            title="El Paso glass installation | We'll Take Care Of Everything" 
            desc="El Paso glass installation: e w"
            canonical={`${props.website}/el-paso-glass-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso glass installation" //KW
            />
            <Header
            title="El Paso glass installation" //KW
            subtitle="e w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="b w"
            image="/contractor.jpg"
            alt="El Paso glass installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional El Paso glass installation" //KW
            desc="y a r e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="s"
            cardDesc3="h"
            />
            <Approach
            title="El Paso glass installation" //KW
            desc="o t n u"
            />
            <Intro
            subtitle="Exceptional El Paso glass installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="i a"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="k"
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
        