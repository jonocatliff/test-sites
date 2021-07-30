
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
            title="Philadelphia hedge maintenance | We'll Take Care Of Everything" 
            desc="Philadelphia hedge maintenance: m h"
            canonical={`${props.website}/philadelphia-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia hedge maintenance" //KW
            />
            <Header
            title="Philadelphia hedge maintenance" //KW
            subtitle="m h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n o"
            image="/window-installation.jpg"
            alt="Philadelphia hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Philadelphia hedge maintenance" //KW
            desc="e   o a"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="s"
            cardDesc3="o"
            />
            <Approach
            title="Philadelphia hedge maintenance" //KW
            desc="d a a i"
            />
            <Intro
            subtitle="Exceptional Philadelphia hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="o"
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
        