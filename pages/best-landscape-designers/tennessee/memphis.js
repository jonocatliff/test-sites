
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
            title="Memphis best landscape designers | We'll Take Care Of Everything" 
            desc="Memphis best landscape designers:   r"
            canonical={`${props.website}/memphis-best-landscape-designers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis best landscape designers" //KW
            />
            <Header
            title="Memphis best landscape designers" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a t"
            image="/window-installation.jpg"
            alt="Memphis best landscape designers"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Memphis best landscape designers" //KW
            desc="h v , t"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="l"
            cardDesc3=" "
            />
            <Approach
            title="Memphis best landscape designers" //KW
            desc="u d t s"
            />
            <Intro
            subtitle="Exceptional Memphis best landscape designers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e o"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="e"
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
        