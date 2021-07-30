
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
            title="Las Vegas window contractors near me | We'll Take Care Of Everything" 
            desc="Las Vegas window contractors near me: c u"
            canonical={`${props.website}/las-vegas-window-contractors-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas window contractors near me" //KW
            />
            <Header
            title="Las Vegas window contractors near me" //KW
            subtitle="c u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r h"
            image="/window-installations.jpg"
            alt="Las Vegas window contractors near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Las Vegas window contractors near me" //KW
            desc="s P   s"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="a"
            />
            <Approach
            title="Las Vegas window contractors near me" //KW
            desc="  r e p"
            />
            <Intro
            subtitle="Exceptional Las Vegas window contractors near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n t"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="y"
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
        