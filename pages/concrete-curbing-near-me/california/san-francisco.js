
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
            title="San Francisco concrete curbing near me | We'll Take Care Of Everything" 
            desc="San Francisco concrete curbing near me: n i"
            canonical={`${props.website}/san-francisco-concrete-curbing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco concrete curbing near me" //KW
            />
            <Header
            title="San Francisco concrete curbing near me" //KW
            subtitle="n i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i n"
            image="/window-washing.jpg"
            alt="San Francisco concrete curbing near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Francisco concrete curbing near me" //KW
            desc="  a t c"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="t"
            cardDesc3="o"
            />
            <Approach
            title="San Francisco concrete curbing near me" //KW
            desc="g w a m"
            />
            <Intro
            subtitle="Exceptional San Francisco concrete curbing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="d f"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="w"
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
        