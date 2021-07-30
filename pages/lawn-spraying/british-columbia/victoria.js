
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
            title="Victoria lawn spraying | We'll Take Care Of Everything" 
            desc="Victoria lawn spraying: l t"
            canonical={`${props.website}/victoria-lawn-spraying`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria lawn spraying" //KW
            />
            <Header
            title="Victoria lawn spraying" //KW
            subtitle="l t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o e"
            image="/window-installation.jpg"
            alt="Victoria lawn spraying"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Victoria lawn spraying" //KW
            desc="s s   e"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="."
            cardDesc2="i"
            cardDesc3="t"
            />
            <Approach
            title="Victoria lawn spraying" //KW
            desc="I   s w"
            />
            <Intro
            subtitle="Exceptional Victoria lawn spraying" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="  a"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2=" "
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
        