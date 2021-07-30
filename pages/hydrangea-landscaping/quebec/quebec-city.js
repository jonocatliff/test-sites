
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
            title="Quebec City hydrangea landscaping | We'll Take Care Of Everything" 
            desc="Quebec City hydrangea landscaping: e  "
            canonical={`${props.website}/quebec-city-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City hydrangea landscaping" //KW
            />
            <Header
            title="Quebec City hydrangea landscaping" //KW
            subtitle="e  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="t  "
            image="/contractor.jpg"
            alt="Quebec City hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Quebec City hydrangea landscaping" //KW
            desc="e o e r"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="u"
            cardDesc3="m"
            />
            <Approach
            title="Quebec City hydrangea landscaping" //KW
            desc="o t d s"
            />
            <Intro
            subtitle="Exceptional Quebec City hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="x e"
            cardDesc3="I"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="a"
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
        