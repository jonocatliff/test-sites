
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
            title="Quebec City lawn spraying | We'll Take Care Of Everything" 
            desc="Quebec City lawn spraying: l s"
            canonical={`${props.website}/quebec-city-lawn-spraying`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City lawn spraying" //KW
            />
            <Header
            title="Quebec City lawn spraying" //KW
            subtitle="l s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="W  "
            image="/window-installations.jpg"
            alt="Quebec City lawn spraying"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Quebec City lawn spraying" //KW
            desc="n r n n"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="u"
            cardDesc3="f"
            />
            <Approach
            title="Quebec City lawn spraying" //KW
            desc="n   t  "
            />
            <Intro
            subtitle="Exceptional Quebec City lawn spraying" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="n m"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2=" "
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
        