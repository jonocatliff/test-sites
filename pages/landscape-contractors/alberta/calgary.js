
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
            title="Calgary landscape contractors | We'll Take Care Of Everything" 
            desc="Calgary landscape contractors: P e"
            canonical={`${props.website}/calgary-landscape-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary landscape contractors" //KW
            />
            <Header
            title="Calgary landscape contractors" //KW
            subtitle="P e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n g"
            image="/contractor.jpg"
            alt="Calgary landscape contractors"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Calgary landscape contractors" //KW
            desc="n a e  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="d"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="a"
            cardDesc3="o"
            />
            <Approach
            title="Calgary landscape contractors" //KW
            desc="l   d s"
            />
            <Intro
            subtitle="Exceptional Calgary landscape contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e  "
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="y"
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
        