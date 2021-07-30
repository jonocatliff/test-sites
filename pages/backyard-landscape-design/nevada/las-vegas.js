
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
            title="Las Vegas backyard landscape design | We'll Take Care Of Everything" 
            desc="Las Vegas backyard landscape design: p ,"
            canonical={`${props.website}/las-vegas-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas backyard landscape design" //KW
            />
            <Header
            title="Las Vegas backyard landscape design" //KW
            subtitle="p ,"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t h"
            image="/window-washing.jpg"
            alt="Las Vegas backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Las Vegas backyard landscape design" //KW
            desc="c   i y"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="Las Vegas backyard landscape design" //KW
            desc="p   d h"
            />
            <Intro
            subtitle="Exceptional Las Vegas backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="t"
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
        