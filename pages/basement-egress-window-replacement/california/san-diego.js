
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
            title="San Diego basement egress window replacement | We'll Take Care Of Everything" 
            desc="San Diego basement egress window replacement:   o"
            canonical={`${props.website}/san-diego-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego basement egress window replacement" //KW
            />
            <Header
            title="San Diego basement egress window replacement" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  o"
            image="/window-installation.jpg"
            alt="San Diego basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Diego basement egress window replacement" //KW
            desc="    u t"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="s"
            cardDesc3="a"
            />
            <Approach
            title="San Diego basement egress window replacement" //KW
            desc="w i r h"
            />
            <Intro
            subtitle="Exceptional San Diego basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="s e"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="r"
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
        