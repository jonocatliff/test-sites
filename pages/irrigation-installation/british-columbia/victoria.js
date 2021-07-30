
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
            title="Victoria irrigation installation | We'll Take Care Of Everything" 
            desc="Victoria irrigation installation: n d"
            canonical={`${props.website}/victoria-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria irrigation installation" //KW
            />
            <Header
            title="Victoria irrigation installation" //KW
            subtitle="n d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r h"
            image="/contractor.jpg"
            alt="Victoria irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Victoria irrigation installation" //KW
            desc="n o s  "
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="o"
            cardDesc3="r"
            />
            <Approach
            title="Victoria irrigation installation" //KW
            desc="t t    "
            />
            <Intro
            subtitle="Exceptional Victoria irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="o x"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="g"
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
        