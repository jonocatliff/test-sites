
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
            title="Oklahoma City lawn control | We'll Take Care Of Everything" 
            desc="Oklahoma City lawn control:   a"
            canonical={`${props.website}/oklahoma-city-lawn-control`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City lawn control" //KW
            />
            <Header
            title="Oklahoma City lawn control" //KW
            subtitle="  a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="f i"
            image="/window-washing.jpg"
            alt="Oklahoma City lawn control"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City lawn control" //KW
            desc="s k f t"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Oklahoma City lawn control" //KW
            desc="e r c n"
            />
            <Intro
            subtitle="Exceptional Oklahoma City lawn control" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="c ’"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="h"
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
        