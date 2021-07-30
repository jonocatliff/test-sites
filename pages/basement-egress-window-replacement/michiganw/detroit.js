
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
            title="Detroit basement egress window replacement | We'll Take Care Of Everything" 
            desc="Detroit basement egress window replacement: c  "
            canonical={`${props.website}/detroit-basement-egress-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit basement egress window replacement" //KW
            />
            <Header
            title="Detroit basement egress window replacement" //KW
            subtitle="c  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d i"
            image="/window-installation.jpg"
            alt="Detroit basement egress window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Detroit basement egress window replacement" //KW
            desc="w n n d"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Detroit basement egress window replacement" //KW
            desc="u s o r"
            />
            <Intro
            subtitle="Exceptional Detroit basement egress window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e n"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="y"
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
        