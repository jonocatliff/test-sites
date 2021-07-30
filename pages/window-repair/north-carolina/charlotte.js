
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
            title="Charlotte window repair | We'll Take Care Of Everything" 
            desc="Charlotte window repair: e ,"
            canonical={`${props.website}/charlotte-window-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte window repair" //KW
            />
            <Header
            title="Charlotte window repair" //KW
            subtitle="e ,"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a n"
            image="/window-installation.jpg"
            alt="Charlotte window repair"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Charlotte window repair" //KW
            desc="y a p w"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="b"
            cardDesc3="h"
            />
            <Approach
            title="Charlotte window repair" //KW
            desc="d h   r"
            />
            <Intro
            subtitle="Exceptional Charlotte window repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u  "
            cardDesc3="P"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        