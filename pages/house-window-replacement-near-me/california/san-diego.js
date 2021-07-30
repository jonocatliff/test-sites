
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
            title="San Diego house window replacement near me | We'll Take Care Of Everything" 
            desc="San Diego house window replacement near me: i o"
            canonical={`${props.website}/san-diego-house-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego house window replacement near me" //KW
            />
            <Header
            title="San Diego house window replacement near me" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc=", r"
            image="/window-installations.jpg"
            alt="San Diego house window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Diego house window replacement near me" //KW
            desc="n   e e"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="c"
            cardDesc3="c"
            />
            <Approach
            title="San Diego house window replacement near me" //KW
            desc="  a o a"
            />
            <Intro
            subtitle="Exceptional San Diego house window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s o"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="s"
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
        