
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
            title="Phoenix lawn spraying | We'll Take Care Of Everything" 
            desc="Phoenix lawn spraying:   o"
            canonical={`${props.website}/phoenix-lawn-spraying`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix lawn spraying" //KW
            />
            <Header
            title="Phoenix lawn spraying" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="A p"
            image="/window-installations.jpg"
            alt="Phoenix lawn spraying"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Phoenix lawn spraying" //KW
            desc="u w m o"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=","
            cardDesc3="h"
            />
            <Approach
            title="Phoenix lawn spraying" //KW
            desc="  o w o"
            />
            <Intro
            subtitle="Exceptional Phoenix lawn spraying" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="l F"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="a"
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
        