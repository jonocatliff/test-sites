
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
            title="Vancouver outdoor landscape design | We'll Take Care Of Everything" 
            desc="Vancouver outdoor landscape design: i a"
            canonical={`${props.website}/vancouver-outdoor-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver outdoor landscape design" //KW
            />
            <Header
            title="Vancouver outdoor landscape design" //KW
            subtitle="i a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s e"
            image="/window-washing.jpg"
            alt="Vancouver outdoor landscape design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver outdoor landscape design" //KW
            desc="O r o undefined"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="h"
            cardDesc2="W"
            cardDesc3="e"
            />
            <Approach
            title="Vancouver outdoor landscape design" //KW
            desc="e t e n"
            />
            <Intro
            subtitle="Exceptional Vancouver outdoor landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e undefined"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="t"
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
        