
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
            title="Calgary patio installation | We'll Take Care Of Everything" 
            desc="Calgary patio installation: a r"
            canonical={`${props.website}/calgary-patio-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary patio installation" //KW
            />
            <Header
            title="Calgary patio installation" //KW
            subtitle="a r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r g"
            image="/contractor.jpg"
            alt="Calgary patio installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Calgary patio installation" //KW
            desc="y , y undefined"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="e"
            cardDesc3="m"
            />
            <Approach
            title="Calgary patio installation" //KW
            desc="h t n i"
            />
            <Intro
            subtitle="Exceptional Calgary patio installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="  undefined"
            cardDesc3="P"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="e"
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
        