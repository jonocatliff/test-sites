
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
            title="San Jose best landscape designers | We'll Take Care Of Everything" 
            desc="San Jose best landscape designers: d e"
            canonical={`${props.website}/san-jose-best-landscape-designers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose best landscape designers" //KW
            />
            <Header
            title="San Jose best landscape designers" //KW
            subtitle="d e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e  "
            image="/window-installation.jpg"
            alt="San Jose best landscape designers"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Jose best landscape designers" //KW
            desc="  s a i"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="A"
            cardDesc3="s"
            />
            <Approach
            title="San Jose best landscape designers" //KW
            desc="n e r  "
            />
            <Intro
            subtitle="Exceptional San Jose best landscape designers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="  o"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
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
        