
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
            title="Calgary window repair | We'll Take Care Of Everything" 
            desc="Calgary window repair: o  "
            canonical={`${props.website}/calgary-window-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary window repair" //KW
            />
            <Header
            title="Calgary window repair" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="i a"
            image="/window-installations.jpg"
            alt="Calgary window repair"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary window repair" //KW
            desc="n r r  "
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="m"
            />
            <Approach
            title="Calgary window repair" //KW
            desc="n   r  "
            />
            <Intro
            subtitle="Exceptional Calgary window repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="r a"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
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
        