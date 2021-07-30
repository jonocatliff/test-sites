
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
            title="Vancouver garden maintenance | We'll Take Care Of Everything" 
            desc="Vancouver garden maintenance:   r"
            canonical={`${props.website}/vancouver-garden-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver garden maintenance" //KW
            />
            <Header
            title="Vancouver garden maintenance" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="f c"
            image="/window-installation.jpg"
            alt="Vancouver garden maintenance"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver garden maintenance" //KW
            desc="e o t  "
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="i"
            cardDesc3="r"
            />
            <Approach
            title="Vancouver garden maintenance" //KW
            desc="h l t o"
            />
            <Intro
            subtitle="Exceptional Vancouver garden maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="O"
            cardDesc2="p i"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="p"
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
        