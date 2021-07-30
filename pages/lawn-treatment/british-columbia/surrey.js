
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
            title="Surrey lawn treatment | We'll Take Care Of Everything" 
            desc="Surrey lawn treatment:   h"
            canonical={`${props.website}/surrey-lawn-treatment`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey lawn treatment" //KW
            />
            <Header
            title="Surrey lawn treatment" //KW
            subtitle="  h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s  "
            image="/contractor.jpg"
            alt="Surrey lawn treatment"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey lawn treatment" //KW
            desc="l d r m"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=","
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="u"
            cardDesc3="W"
            />
            <Approach
            title="Surrey lawn treatment" //KW
            desc="h   o s"
            />
            <Intro
            subtitle="Exceptional Surrey lawn treatment" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s f"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="v"
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
        