
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
            title="Chicago concrete curbing near me | We'll Take Care Of Everything" 
            desc="Chicago concrete curbing near me: n a"
            canonical={`${props.website}/chicago-concrete-curbing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago concrete curbing near me" //KW
            />
            <Header
            title="Chicago concrete curbing near me" //KW
            subtitle="n a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e p"
            image="/window-installation.jpg"
            alt="Chicago concrete curbing near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Chicago concrete curbing near me" //KW
            desc="a i o t"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="r"
            cardDesc3="t"
            />
            <Approach
            title="Chicago concrete curbing near me" //KW
            desc="n r h t"
            />
            <Intro
            subtitle="Exceptional Chicago concrete curbing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="e s"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2=" "
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
        