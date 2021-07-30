
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
            title="Kitchener concrete curbing | We'll Take Care Of Everything" 
            desc="Kitchener concrete curbing: n t"
            canonical={`${props.website}/kitchener-concrete-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener concrete curbing" //KW
            />
            <Header
            title="Kitchener concrete curbing" //KW
            subtitle="n t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="w a"
            image="/window-installations.jpg"
            alt="Kitchener concrete curbing"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Kitchener concrete curbing" //KW
            desc="  r u l"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="u"
            cardDesc3="u"
            />
            <Approach
            title="Kitchener concrete curbing" //KW
            desc="r p   h"
            />
            <Intro
            subtitle="Exceptional Kitchener concrete curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="O"
            cardDesc2="e e"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="s"
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
        