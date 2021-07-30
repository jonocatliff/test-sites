
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
            title="Charlotte garden landscape design | We'll Take Care Of Everything" 
            desc="Charlotte garden landscape design: l u"
            canonical={`${props.website}/charlotte-garden-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte garden landscape design" //KW
            />
            <Header
            title="Charlotte garden landscape design" //KW
            subtitle="l u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="   "
            image="/window-washing.jpg"
            alt="Charlotte garden landscape design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Charlotte garden landscape design" //KW
            desc="s e f o"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="t"
            cardDesc3="s"
            />
            <Approach
            title="Charlotte garden landscape design" //KW
            desc="s h   i"
            />
            <Intro
            subtitle="Exceptional Charlotte garden landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i i"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="h"
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
        