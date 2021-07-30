
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
            title="Vancouver garden landscaping | We'll Take Care Of Everything" 
            desc="Vancouver garden landscaping: c e"
            canonical={`${props.website}/vancouver-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver garden landscaping" //KW
            />
            <Header
            title="Vancouver garden landscaping" //KW
            subtitle="c e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  e"
            image="/window-installations.jpg"
            alt="Vancouver garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Vancouver garden landscaping" //KW
            desc="s b f l"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Vancouver garden landscaping" //KW
            desc="n r u a"
            />
            <Intro
            subtitle="Exceptional Vancouver garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="c y"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
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
        