
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
            title="Baltimore garden maintenance | We'll Take Care Of Everything" 
            desc="Baltimore garden maintenance: n m"
            canonical={`${props.website}/baltimore-garden-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore garden maintenance" //KW
            />
            <Header
            title="Baltimore garden maintenance" //KW
            subtitle="n m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  m"
            image="/window-installation.jpg"
            alt="Baltimore garden maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Baltimore garden maintenance" //KW
            desc="e h   u"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Baltimore garden maintenance" //KW
            desc="a a   e"
            />
            <Intro
            subtitle="Exceptional Baltimore garden maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o u"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="m"
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
        