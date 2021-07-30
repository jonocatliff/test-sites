
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
            title="Las Vegas garden landscape design | We'll Take Care Of Everything" 
            desc="Las Vegas garden landscape design: l h"
            canonical={`${props.website}/las-vegas-garden-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas garden landscape design" //KW
            />
            <Header
            title="Las Vegas garden landscape design" //KW
            subtitle="l h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o e"
            image="/window-installations.jpg"
            alt="Las Vegas garden landscape design"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Las Vegas garden landscape design" //KW
            desc="y v o o"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="r"
            cardDesc3="m"
            />
            <Approach
            title="Las Vegas garden landscape design" //KW
            desc="r f n  "
            />
            <Intro
            subtitle="Exceptional Las Vegas garden landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="d n"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="I" //KW
            desc2=" "
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
        