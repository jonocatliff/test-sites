
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
            title="San Francisco house window replacement near me | We'll Take Care Of Everything" 
            desc="San Francisco house window replacement near me:   o"
            canonical={`${props.website}/san-francisco-house-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Francisco house window replacement near me" //KW
            />
            <Header
            title="San Francisco house window replacement near me" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  d"
            image="/window-installation.jpg"
            alt="San Francisco house window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Francisco house window replacement near me" //KW
            desc="W a c a"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="y"
            cardDesc3="l"
            />
            <Approach
            title="San Francisco house window replacement near me" //KW
            desc="e e e p"
            />
            <Intro
            subtitle="Exceptional San Francisco house window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="u n"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="c"
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
        