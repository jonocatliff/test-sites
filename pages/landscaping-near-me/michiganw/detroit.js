
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
            title="Detroit landscaping near me | We'll Take Care Of Everything" 
            desc="Detroit landscaping near me: r h"
            canonical={`${props.website}/detroit-landscaping-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit landscaping near me" //KW
            />
            <Header
            title="Detroit landscaping near me" //KW
            subtitle="r h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r a"
            image="/window-installation.jpg"
            alt="Detroit landscaping near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Detroit landscaping near me" //KW
            desc="r     s"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="o"
            cardDesc3="e"
            />
            <Approach
            title="Detroit landscaping near me" //KW
            desc="  e    "
            />
            <Intro
            subtitle="Exceptional Detroit landscaping near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r s"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="c"
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
        