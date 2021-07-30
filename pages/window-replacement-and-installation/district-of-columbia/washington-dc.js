
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
            title="Washington DC window replacement and installation | We'll Take Care Of Everything" 
            desc="Washington DC window replacement and installation: s n"
            canonical={`${props.website}/washington-dc-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC window replacement and installation" //KW
            />
            <Header
            title="Washington DC window replacement and installation" //KW
            subtitle="s n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e o"
            image="/contractor.jpg"
            alt="Washington DC window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Washington DC window replacement and installation" //KW
            desc="a s m l"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Washington DC window replacement and installation" //KW
            desc="v t   h"
            />
            <Intro
            subtitle="Exceptional Washington DC window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="b i"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="w"
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
        