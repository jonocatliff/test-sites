
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
            title="Baltimore home garden design | We'll Take Care Of Everything" 
            desc="Baltimore home garden design: r m"
            canonical={`${props.website}/baltimore-home-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore home garden design" //KW
            />
            <Header
            title="Baltimore home garden design" //KW
            subtitle="r m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a t"
            image="/window-installations.jpg"
            alt="Baltimore home garden design"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Baltimore home garden design" //KW
            desc="  o p e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="r"
            cardDesc3="t"
            />
            <Approach
            title="Baltimore home garden design" //KW
            desc="v h e m"
            />
            <Intro
            subtitle="Exceptional Baltimore home garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="r"
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
        