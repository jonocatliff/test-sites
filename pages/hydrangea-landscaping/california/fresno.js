
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
            title="Fresno hydrangea landscaping | We'll Take Care Of Everything" 
            desc="Fresno hydrangea landscaping: a l"
            canonical={`${props.website}/fresno-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno hydrangea landscaping" //KW
            />
            <Header
            title="Fresno hydrangea landscaping" //KW
            subtitle="a l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="u v"
            image="/contractor.jpg"
            alt="Fresno hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Fresno hydrangea landscaping" //KW
            desc="l A e e"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="u"
            cardDesc3="n"
            />
            <Approach
            title="Fresno hydrangea landscaping" //KW
            desc="P c r I"
            />
            <Intro
            subtitle="Exceptional Fresno hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="i n"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="n"
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
        