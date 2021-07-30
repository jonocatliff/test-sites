
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
            title="Louisville gardeners | We'll Take Care Of Everything" 
            desc="Louisville gardeners: o I"
            canonical={`${props.website}/louisville-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville gardeners" //KW
            />
            <Header
            title="Louisville gardeners" //KW
            subtitle="o I"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n  "
            image="/contractor.jpg"
            alt="Louisville gardeners"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Louisville gardeners" //KW
            desc="  s o o"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="u"
            cardDesc3="A"
            />
            <Approach
            title="Louisville gardeners" //KW
            desc="e     e"
            />
            <Intro
            subtitle="Exceptional Louisville gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o e"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="y"
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
        