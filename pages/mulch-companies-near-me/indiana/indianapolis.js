
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
            title="Indianapolis mulch companies near me | We'll Take Care Of Everything" 
            desc="Indianapolis mulch companies near me: s o"
            canonical={`${props.website}/indianapolis-mulch-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis mulch companies near me" //KW
            />
            <Header
            title="Indianapolis mulch companies near me" //KW
            subtitle="s o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a e"
            image="/window-washing.jpg"
            alt="Indianapolis mulch companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Indianapolis mulch companies near me" //KW
            desc="    e e"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Indianapolis mulch companies near me" //KW
            desc="a c u y"
            />
            <Intro
            subtitle="Exceptional Indianapolis mulch companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="v undefined"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="p"
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
        