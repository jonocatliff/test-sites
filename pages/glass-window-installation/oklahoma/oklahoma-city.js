
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
            title="Oklahoma City glass window installation | We'll Take Care Of Everything" 
            desc="Oklahoma City glass window installation: o O"
            canonical={`${props.website}/oklahoma-city-glass-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City glass window installation" //KW
            />
            <Header
            title="Oklahoma City glass window installation" //KW
            subtitle="o O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n a"
            image="/window-installation.jpg"
            alt="Oklahoma City glass window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Oklahoma City glass window installation" //KW
            desc="s e o i"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="r"
            cardDesc3="W"
            />
            <Approach
            title="Oklahoma City glass window installation" //KW
            desc="t t t a"
            />
            <Intro
            subtitle="Exceptional Oklahoma City glass window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="   "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="s"
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
        