
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
            title="Toronto concrete landscaping | We'll Take Care Of Everything" 
            desc="Toronto concrete landscaping: m l"
            canonical={`${props.website}/toronto-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto concrete landscaping" //KW
            />
            <Header
            title="Toronto concrete landscaping" //KW
            subtitle="m l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s e"
            image="/window-installations.jpg"
            alt="Toronto concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Toronto concrete landscaping" //KW
            desc="l o u y"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="t"
            cardDesc3="d"
            />
            <Approach
            title="Toronto concrete landscaping" //KW
            desc="w t   c"
            />
            <Intro
            subtitle="Exceptional Toronto concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2=". a"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="m"
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
        