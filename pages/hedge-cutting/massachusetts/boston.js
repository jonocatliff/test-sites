
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
            title="Boston hedge cutting | We'll Take Care Of Everything" 
            desc="Boston hedge cutting: h a"
            canonical={`${props.website}/boston-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston hedge cutting" //KW
            />
            <Header
            title="Boston hedge cutting" //KW
            subtitle="h a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r n"
            image="/window-installation.jpg"
            alt="Boston hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Boston hedge cutting" //KW
            desc="o i a r"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="p"
            cardDesc3="i"
            />
            <Approach
            title="Boston hedge cutting" //KW
            desc="  o e f"
            />
            <Intro
            subtitle="Exceptional Boston hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="n n"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="e"
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
        