
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
            title="Toronto lawn treatment | We'll Take Care Of Everything" 
            desc="Toronto lawn treatment: t u"
            canonical={`${props.website}/toronto-lawn-treatment`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto lawn treatment" //KW
            />
            <Header
            title="Toronto lawn treatment" //KW
            subtitle="t u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o e"
            image="/contractor.jpg"
            alt="Toronto lawn treatment"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Toronto lawn treatment" //KW
            desc="m u   h"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="y"
            cardDesc3="a"
            />
            <Approach
            title="Toronto lawn treatment" //KW
            desc="w p i i"
            />
            <Intro
            subtitle="Exceptional Toronto lawn treatment" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="  o"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="r"
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
        