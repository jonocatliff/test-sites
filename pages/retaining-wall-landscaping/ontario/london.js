
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
            title="London retaining wall landscaping | We'll Take Care Of Everything" 
            desc="London retaining wall landscaping: f c"
            canonical={`${props.website}/london-retaining-wall-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London retaining wall landscaping" //KW
            />
            <Header
            title="London retaining wall landscaping" //KW
            subtitle="f c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="f b"
            image="/window-installations.jpg"
            alt="London retaining wall landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional London retaining wall landscaping" //KW
            desc="  i O undefined"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="v"
            cardDesc2="n"
            cardDesc3="e"
            />
            <Approach
            title="London retaining wall landscaping" //KW
            desc="e i n p"
            />
            <Intro
            subtitle="Exceptional London retaining wall landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="s undefined"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="b"
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
        