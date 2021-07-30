
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
            title="Louisville garden landscaping | We'll Take Care Of Everything" 
            desc="Louisville garden landscaping: n r"
            canonical={`${props.website}/louisville-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville garden landscaping" //KW
            />
            <Header
            title="Louisville garden landscaping" //KW
            subtitle="n r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  w"
            image="/contractor.jpg"
            alt="Louisville garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Louisville garden landscaping" //KW
            desc="y n x l"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="r"
            cardDesc3="r"
            />
            <Approach
            title="Louisville garden landscaping" //KW
            desc="t t r p"
            />
            <Intro
            subtitle="Exceptional Louisville garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e r"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="e"
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
        