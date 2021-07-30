
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
            title="Austin landscape architect | We'll Take Care Of Everything" 
            desc="Austin landscape architect: f s"
            canonical={`${props.website}/austin-landscape-architect`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin landscape architect" //KW
            />
            <Header
            title="Austin landscape architect" //KW
            subtitle="f s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  s"
            image="/contractor.jpg"
            alt="Austin landscape architect"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Austin landscape architect" //KW
            desc="e u a c"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="v"
            cardDesc3="n"
            />
            <Approach
            title="Austin landscape architect" //KW
            desc="t a    "
            />
            <Intro
            subtitle="Exceptional Austin landscape architect" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="r e"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2=" "
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
        