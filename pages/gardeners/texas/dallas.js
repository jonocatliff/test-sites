
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
            title="Dallas gardeners | We'll Take Care Of Everything" 
            desc="Dallas gardeners: n n"
            canonical={`${props.website}/dallas-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas gardeners" //KW
            />
            <Header
            title="Dallas gardeners" //KW
            subtitle="n n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r a"
            image="/window-installation.jpg"
            alt="Dallas gardeners"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Dallas gardeners" //KW
            desc="f e e s"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="i"
            cardDesc3="n"
            />
            <Approach
            title="Dallas gardeners" //KW
            desc="r r w n"
            />
            <Intro
            subtitle="Exceptional Dallas gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="n f"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
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
        