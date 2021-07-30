
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
            title="Victoria pruning hedges | We'll Take Care Of Everything" 
            desc="Victoria pruning hedges:   r"
            canonical={`${props.website}/victoria-pruning-hedges`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria pruning hedges" //KW
            />
            <Header
            title="Victoria pruning hedges" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="u h"
            image="/window-installations.jpg"
            alt="Victoria pruning hedges"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Victoria pruning hedges" //KW
            desc="  s x undefined"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="l"
            cardDesc3="a"
            />
            <Approach
            title="Victoria pruning hedges" //KW
            desc="s h   o"
            />
            <Intro
            subtitle="Exceptional Victoria pruning hedges" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="o undefined"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="a"
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
        