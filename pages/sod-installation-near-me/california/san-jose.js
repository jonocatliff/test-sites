
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
            title="San Jose sod installation near me | We'll Take Care Of Everything" 
            desc="San Jose sod installation near me: d w"
            canonical={`${props.website}/san-jose-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose sod installation near me" //KW
            />
            <Header
            title="San Jose sod installation near me" //KW
            subtitle="d w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s  "
            image="/window-installations.jpg"
            alt="San Jose sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Jose sod installation near me" //KW
            desc="      undefined"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="n"
            cardDesc3="o"
            />
            <Approach
            title="San Jose sod installation near me" //KW
            desc="r d l  "
            />
            <Intro
            subtitle="Exceptional San Jose sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="u"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        