
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
            title="Toronto commercial landscaping | We'll Take Care Of Everything" 
            desc="Toronto commercial landscaping: e m"
            canonical={`${props.website}/toronto-commercial-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto commercial landscaping" //KW
            />
            <Header
            title="Toronto commercial landscaping" //KW
            subtitle="e m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a s"
            image="/window-washing.jpg"
            alt="Toronto commercial landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Toronto commercial landscaping" //KW
            desc="r v a o"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3="o"
            />
            <Approach
            title="Toronto commercial landscaping" //KW
            desc="s r o p"
            />
            <Intro
            subtitle="Exceptional Toronto commercial landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="i s"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="r"
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
        