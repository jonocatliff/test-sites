
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
            title="Toronto professional landscaping | We'll Take Care Of Everything" 
            desc="Toronto professional landscaping: o f"
            canonical={`${props.website}/toronto-professional-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto professional landscaping" //KW
            />
            <Header
            title="Toronto professional landscaping" //KW
            subtitle="o f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a e"
            image="/window-installations.jpg"
            alt="Toronto professional landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Toronto professional landscaping" //KW
            desc="y s o undefined"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2=" "
            cardDesc3="r"
            />
            <Approach
            title="Toronto professional landscaping" //KW
            desc="e m   c"
            />
            <Intro
            subtitle="Exceptional Toronto professional landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e undefined"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
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
        