
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
            title="Calgary home landscaping | We'll Take Care Of Everything" 
            desc="Calgary home landscaping:   i"
            canonical={`${props.website}/calgary-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary home landscaping" //KW
            />
            <Header
            title="Calgary home landscaping" //KW
            subtitle="  i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a h"
            image="/window-installations.jpg"
            alt="Calgary home landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Calgary home landscaping" //KW
            desc="n r   u"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="e"
            cardDesc3="t"
            />
            <Approach
            title="Calgary home landscaping" //KW
            desc="i e h e"
            />
            <Intro
            subtitle="Exceptional Calgary home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p w"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="n"
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
        