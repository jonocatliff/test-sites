
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
            title="El Paso vinyl window installation | We'll Take Care Of Everything" 
            desc="El Paso vinyl window installation: t t"
            canonical={`${props.website}/el-paso-vinyl-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso vinyl window installation" //KW
            />
            <Header
            title="El Paso vinyl window installation" //KW
            subtitle="t t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a r"
            image="/window-installations.jpg"
            alt="El Paso vinyl window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional El Paso vinyl window installation" //KW
            desc="b s e e"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="p"
            cardDesc3=" "
            />
            <Approach
            title="El Paso vinyl window installation" //KW
            desc="n   t h"
            />
            <Intro
            subtitle="Exceptional El Paso vinyl window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="e v"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
            desc2="s"
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
        