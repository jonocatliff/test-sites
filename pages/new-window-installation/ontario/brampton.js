
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
            title="Brampton new window installation | We'll Take Care Of Everything" 
            desc="Brampton new window installation: e u"
            canonical={`${props.website}/brampton-new-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton new window installation" //KW
            />
            <Header
            title="Brampton new window installation" //KW
            subtitle="e u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e h"
            image="/window-washing.jpg"
            alt="Brampton new window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Brampton new window installation" //KW
            desc="n s d k"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="d"
            cardDesc3=" "
            />
            <Approach
            title="Brampton new window installation" //KW
            desc="s l   e"
            />
            <Intro
            subtitle="Exceptional Brampton new window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t i"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="d"
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
        