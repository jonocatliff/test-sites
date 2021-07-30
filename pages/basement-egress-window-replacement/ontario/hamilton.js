
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
            title="Hamilton basement egress window replacement | We'll Take Care Of Everything" 
            desc="Hamilton basement egress window replacement: w t"
            canonical={`${props.website}/hamilton-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton basement egress window replacement" //KW
            />
            <Header
            title="Hamilton basement egress window replacement" //KW
            subtitle="w t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r l"
            image="/window-washing.jpg"
            alt="Hamilton basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Hamilton basement egress window replacement" //KW
            desc="x s e c"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="p"
            cardDesc3="t"
            />
            <Approach
            title="Hamilton basement egress window replacement" //KW
            desc="m b t h"
            />
            <Intro
            subtitle="Exceptional Hamilton basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="t l"
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="p"
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
        