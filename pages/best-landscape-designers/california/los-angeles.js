
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
            title="Los Angeles best landscape designers | We'll Take Care Of Everything" 
            desc="Los Angeles best landscape designers: b r"
            canonical={`${props.website}/los-angeles-best-landscape-designers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles best landscape designers" //KW
            />
            <Header
            title="Los Angeles best landscape designers" //KW
            subtitle="b r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="c  "
            image="/contractor.jpg"
            alt="Los Angeles best landscape designers"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Los Angeles best landscape designers" //KW
            desc="l u f o"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="d"
            cardDesc3="w"
            />
            <Approach
            title="Los Angeles best landscape designers" //KW
            desc="e i v a"
            />
            <Intro
            subtitle="Exceptional Los Angeles best landscape designers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="c  "
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="p"
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
        