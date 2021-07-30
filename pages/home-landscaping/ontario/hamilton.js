
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
            title="Hamilton home landscaping | We'll Take Care Of Everything" 
            desc="Hamilton home landscaping: A w"
            canonical={`${props.website}/hamilton-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton home landscaping" //KW
            />
            <Header
            title="Hamilton home landscaping" //KW
            subtitle="A w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="i t"
            image="/window-installation.jpg"
            alt="Hamilton home landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Hamilton home landscaping" //KW
            desc="s n r w"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="l"
            cardDesc3="o"
            />
            <Approach
            title="Hamilton home landscaping" //KW
            desc="w i n  "
            />
            <Intro
            subtitle="Exceptional Hamilton home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="f r"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="a"
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
        