
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
            title="Oshawa lawn spraying | We'll Take Care Of Everything" 
            desc="Oshawa lawn spraying: l y"
            canonical={`${props.website}/oshawa-lawn-spraying`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa lawn spraying" //KW
            />
            <Header
            title="Oshawa lawn spraying" //KW
            subtitle="l y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="p i"
            image="/window-washing.jpg"
            alt="Oshawa lawn spraying"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Oshawa lawn spraying" //KW
            desc="o y v i"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="p"
            cardDesc3="l"
            />
            <Approach
            title="Oshawa lawn spraying" //KW
            desc="o e   e"
            />
            <Intro
            subtitle="Exceptional Oshawa lawn spraying" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="u n"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="m"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        