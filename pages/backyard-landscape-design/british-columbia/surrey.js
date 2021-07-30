
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
            title="Surrey backyard landscape design | We'll Take Care Of Everything" 
            desc="Surrey backyard landscape design: t a"
            canonical={`${props.website}/surrey-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey backyard landscape design" //KW
            />
            <Header
            title="Surrey backyard landscape design" //KW
            subtitle="t a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t u"
            image="/contractor.jpg"
            alt="Surrey backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Surrey backyard landscape design" //KW
            desc="d l f c"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="i"
            cardDesc3="i"
            />
            <Approach
            title="Surrey backyard landscape design" //KW
            desc="t o h h"
            />
            <Intro
            subtitle="Exceptional Surrey backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="I n"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2=","
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
        