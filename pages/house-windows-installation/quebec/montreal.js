
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
            title="Montreal house windows installation | We'll Take Care Of Everything" 
            desc="Montreal house windows installation: t l"
            canonical={`${props.website}/montreal-house-windows-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal house windows installation" //KW
            />
            <Header
            title="Montreal house windows installation" //KW
            subtitle="t l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r a"
            image="/window-washing.jpg"
            alt="Montreal house windows installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Montreal house windows installation" //KW
            desc="  g s o"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="x"
            cardDesc2="s"
            cardDesc3="a"
            />
            <Approach
            title="Montreal house windows installation" //KW
            desc="e e s o"
            />
            <Intro
            subtitle="Exceptional Montreal house windows installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="W" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        