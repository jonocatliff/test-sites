
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
            title="Philadelphia concrete curbing near me | We'll Take Care Of Everything" 
            desc="Philadelphia concrete curbing near me:   l"
            canonical={`${props.website}/philadelphia-concrete-curbing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia concrete curbing near me" //KW
            />
            <Header
            title="Philadelphia concrete curbing near me" //KW
            subtitle="  l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t o"
            image="/window-washing.jpg"
            alt="Philadelphia concrete curbing near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Philadelphia concrete curbing near me" //KW
            desc="y l    "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="e"
            cardDesc3="W"
            />
            <Approach
            title="Philadelphia concrete curbing near me" //KW
            desc="c v y a"
            />
            <Intro
            subtitle="Exceptional Philadelphia concrete curbing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t r"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="a"
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
        