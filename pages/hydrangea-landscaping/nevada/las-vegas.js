
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
            title="Las Vegas hydrangea landscaping | We'll Take Care Of Everything" 
            desc="Las Vegas hydrangea landscaping: r n"
            canonical={`${props.website}/las-vegas-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas hydrangea landscaping" //KW
            />
            <Header
            title="Las Vegas hydrangea landscaping" //KW
            subtitle="r n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e i"
            image="/window-washing.jpg"
            alt="Las Vegas hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Las Vegas hydrangea landscaping" //KW
            desc="d r r t"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="Las Vegas hydrangea landscaping" //KW
            desc="t f u w"
            />
            <Intro
            subtitle="Exceptional Las Vegas hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="i i"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
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
        