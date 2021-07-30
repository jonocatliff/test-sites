
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
            title="Indianapolis house window replacement near me | We'll Take Care Of Everything" 
            desc="Indianapolis house window replacement near me: a n"
            canonical={`${props.website}/indianapolis-house-window-replacement-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis house window replacement near me" //KW
            />
            <Header
            title="Indianapolis house window replacement near me" //KW
            subtitle="a n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s s"
            image="/window-washing.jpg"
            alt="Indianapolis house window replacement near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Indianapolis house window replacement near me" //KW
            desc="i l e t"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Indianapolis house window replacement near me" //KW
            desc="c s y y"
            />
            <Intro
            subtitle="Exceptional Indianapolis house window replacement near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r ’"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="e"
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
        