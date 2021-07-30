
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
            title="London sod installation near me | We'll Take Care Of Everything" 
            desc="London sod installation near me: d h"
            canonical={`${props.website}/london-sod-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London sod installation near me" //KW
            />
            <Header
            title="London sod installation near me" //KW
            subtitle="d h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="p m"
            image="/contractor.jpg"
            alt="London sod installation near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional London sod installation near me" //KW
            desc="w u c undefined"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="o"
            cardDesc3="k"
            />
            <Approach
            title="London sod installation near me" //KW
            desc="o     o"
            />
            <Intro
            subtitle="Exceptional London sod installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="s undefined"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="o"
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
        