
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
            title="Charlotte lawn repair near me | We'll Take Care Of Everything" 
            desc="Charlotte lawn repair near me: m h"
            canonical={`${props.website}/charlotte-lawn-repair-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte lawn repair near me" //KW
            />
            <Header
            title="Charlotte lawn repair near me" //KW
            subtitle="m h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  n"
            image="/contractor.jpg"
            alt="Charlotte lawn repair near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Charlotte lawn repair near me" //KW
            desc="n   s t"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="i"
            cardDesc3="n"
            />
            <Approach
            title="Charlotte lawn repair near me" //KW
            desc="h e y t"
            />
            <Intro
            subtitle="Exceptional Charlotte lawn repair near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n w"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="."
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
        