
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
            title="El Paso basement egress window replacement | We'll Take Care Of Everything" 
            desc="El Paso basement egress window replacement:   u"
            canonical={`${props.website}/el-paso-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso basement egress window replacement" //KW
            />
            <Header
            title="El Paso basement egress window replacement" //KW
            subtitle="  u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="n r"
            image="/window-installation.jpg"
            alt="El Paso basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional El Paso basement egress window replacement" //KW
            desc="  i e e"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="El Paso basement egress window replacement" //KW
            desc="o l j e"
            />
            <Intro
            subtitle="Exceptional El Paso basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="c o"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="t"
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
        