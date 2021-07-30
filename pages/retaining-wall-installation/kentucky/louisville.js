
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
            title="Louisville retaining wall installation | We'll Take Care Of Everything" 
            desc="Louisville retaining wall installation: r o"
            canonical={`${props.website}/louisville-retaining-wall-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville retaining wall installation" //KW
            />
            <Header
            title="Louisville retaining wall installation" //KW
            subtitle="r o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  o"
            image="/contractor.jpg"
            alt="Louisville retaining wall installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville retaining wall installation" //KW
            desc=". n i undefined"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="i"
            cardDesc3="t"
            />
            <Approach
            title="Louisville retaining wall installation" //KW
            desc="    , e"
            />
            <Intro
            subtitle="Exceptional Louisville retaining wall installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="t undefined"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="f"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        