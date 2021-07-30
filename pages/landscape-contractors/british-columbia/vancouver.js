
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
            title="Vancouver landscape contractors | We'll Take Care Of Everything" 
            desc="Vancouver landscape contractors: i a"
            canonical={`${props.website}/vancouver-landscape-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver landscape contractors" //KW
            />
            <Header
            title="Vancouver landscape contractors" //KW
            subtitle="i a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s e"
            image="/window-installation.jpg"
            alt="Vancouver landscape contractors"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver landscape contractors" //KW
            desc="u a r o"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="u"
            cardDesc3="t"
            />
            <Approach
            title="Vancouver landscape contractors" //KW
            desc="  i w  "
            />
            <Intro
            subtitle="Exceptional Vancouver landscape contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="r o"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="v"
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
        