
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
            title="New York City hedge cutting | We'll Take Care Of Everything" 
            desc="New York City hedge cutting:    "
            canonical={`${props.website}/new-york-city-hedge-cutting`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City hedge cutting" //KW
            />
            <Header
            title="New York City hedge cutting" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  a"
            image="/window-washing.jpg"
            alt="New York City hedge cutting"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional New York City hedge cutting" //KW
            desc="i , e u"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="e"
            cardDesc3="c"
            />
            <Approach
            title="New York City hedge cutting" //KW
            desc="e e    "
            />
            <Intro
            subtitle="Exceptional New York City hedge cutting" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i o"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="o"
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
        