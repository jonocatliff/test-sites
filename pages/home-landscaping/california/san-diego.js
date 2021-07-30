
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
            title="San Diego home landscaping | We'll Take Care Of Everything" 
            desc="San Diego home landscaping: d a"
            canonical={`${props.website}/san-diego-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego home landscaping" //KW
            />
            <Header
            title="San Diego home landscaping" //KW
            subtitle="d a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="   "
            image="/window-installation.jpg"
            alt="San Diego home landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Diego home landscaping" //KW
            desc="e A s  "
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="San Diego home landscaping" //KW
            desc="n   y s"
            />
            <Intro
            subtitle="Exceptional San Diego home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="n f"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="r"
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
        