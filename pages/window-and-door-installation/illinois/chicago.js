
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
            title="Chicago window and door installation | We'll Take Care Of Everything" 
            desc="Chicago window and door installation: a h"
            canonical={`${props.website}/chicago-window-and-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago window and door installation" //KW
            />
            <Header
            title="Chicago window and door installation" //KW
            subtitle="a h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="O i"
            image="/window-installations.jpg"
            alt="Chicago window and door installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Chicago window and door installation" //KW
            desc="n i e t"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="a"
            cardDesc3="h"
            />
            <Approach
            title="Chicago window and door installation" //KW
            desc="o a f h"
            />
            <Intro
            subtitle="Exceptional Chicago window and door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="n e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="," //KW
            desc2="r"
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
        