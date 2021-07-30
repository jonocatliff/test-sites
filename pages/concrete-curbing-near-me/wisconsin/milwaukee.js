
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
            title="Milwaukee concrete curbing near me | We'll Take Care Of Everything" 
            desc="Milwaukee concrete curbing near me: s d"
            canonical={`${props.website}/milwaukee-concrete-curbing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee concrete curbing near me" //KW
            />
            <Header
            title="Milwaukee concrete curbing near me" //KW
            subtitle="s d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s  "
            image="/window-installations.jpg"
            alt="Milwaukee concrete curbing near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Milwaukee concrete curbing near me" //KW
            desc="s t l d"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Milwaukee concrete curbing near me" //KW
            desc="i i o o"
            />
            <Intro
            subtitle="Exceptional Milwaukee concrete curbing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t F"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="i"
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
        