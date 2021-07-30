
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
            title="Ottowa lawn service companies | We'll Take Care Of Everything" 
            desc="Ottowa lawn service companies: i l"
            canonical={`${props.website}/ottowa-lawn-service-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa lawn service companies" //KW
            />
            <Header
            title="Ottowa lawn service companies" //KW
            subtitle="i l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o t"
            image="/window-installations.jpg"
            alt="Ottowa lawn service companies"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Ottowa lawn service companies" //KW
            desc="r e o i"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="Ottowa lawn service companies" //KW
            desc="t t i e"
            />
            <Intro
            subtitle="Exceptional Ottowa lawn service companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  e"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="j"
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
        