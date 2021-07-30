
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
            title="Phoenix cheap window replacement | We'll Take Care Of Everything" 
            desc="Phoenix cheap window replacement: d Y"
            canonical={`${props.website}/phoenix-cheap-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix cheap window replacement" //KW
            />
            <Header
            title="Phoenix cheap window replacement" //KW
            subtitle="d Y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o h"
            image="/window-washing.jpg"
            alt="Phoenix cheap window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Phoenix cheap window replacement" //KW
            desc="e i t t"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="y"
            cardDesc3="y"
            />
            <Approach
            title="Phoenix cheap window replacement" //KW
            desc="c l v p"
            />
            <Intro
            subtitle="Exceptional Phoenix cheap window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="u r"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="i"
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
        