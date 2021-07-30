
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
            title="Ottowa best lawn service | We'll Take Care Of Everything" 
            desc="Ottowa best lawn service: t  "
            canonical={`${props.website}/ottowa-best-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa best lawn service" //KW
            />
            <Header
            title="Ottowa best lawn service" //KW
            subtitle="t  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="   "
            image="/window-installations.jpg"
            alt="Ottowa best lawn service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Ottowa best lawn service" //KW
            desc="i l o c"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="s"
            cardDesc3="w"
            />
            <Approach
            title="Ottowa best lawn service" //KW
            desc="e e o s"
            />
            <Intro
            subtitle="Exceptional Ottowa best lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c t"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="v"
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
        