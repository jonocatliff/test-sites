
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
            title="Charlotte lawn spraying | We'll Take Care Of Everything" 
            desc="Charlotte lawn spraying: i  "
            canonical={`${props.website}/charlotte-lawn-spraying`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte lawn spraying" //KW
            />
            <Header
            title="Charlotte lawn spraying" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o h"
            image="/contractor.jpg"
            alt="Charlotte lawn spraying"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Charlotte lawn spraying" //KW
            desc="c l o m"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="e"
            cardDesc3="r"
            />
            <Approach
            title="Charlotte lawn spraying" //KW
            desc="P .   i"
            />
            <Intro
            subtitle="Exceptional Charlotte lawn spraying" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="."
            cardDesc2="  h"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="e"
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
        