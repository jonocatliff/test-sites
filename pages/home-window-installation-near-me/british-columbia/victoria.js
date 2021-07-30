
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
            title="Victoria home window installation near me | We'll Take Care Of Everything" 
            desc="Victoria home window installation near me: i y"
            canonical={`${props.website}/victoria-home-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria home window installation near me" //KW
            />
            <Header
            title="Victoria home window installation near me" //KW
            subtitle="i y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e i"
            image="/window-washing.jpg"
            alt="Victoria home window installation near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Victoria home window installation near me" //KW
            desc="n s s s"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="q"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="r"
            cardDesc3="a"
            />
            <Approach
            title="Victoria home window installation near me" //KW
            desc="p t   a"
            />
            <Intro
            subtitle="Exceptional Victoria home window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="e r"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="a"
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
        