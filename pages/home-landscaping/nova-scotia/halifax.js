
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
            title="Halifax home landscaping | We'll Take Care Of Everything" 
            desc="Halifax home landscaping: i  "
            canonical={`${props.website}/halifax-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax home landscaping" //KW
            />
            <Header
            title="Halifax home landscaping" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w o"
            image="/window-washing.jpg"
            alt="Halifax home landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Halifax home landscaping" //KW
            desc="  s e o"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="o"
            cardDesc3="l"
            />
            <Approach
            title="Halifax home landscaping" //KW
            desc="  w h c"
            />
            <Intro
            subtitle="Exceptional Halifax home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="i o"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="n"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        