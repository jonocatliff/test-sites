
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
            title="Boston grass lawn care | We'll Take Care Of Everything" 
            desc="Boston grass lawn care: o P"
            canonical={`${props.website}/boston-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston grass lawn care" //KW
            />
            <Header
            title="Boston grass lawn care" //KW
            subtitle="o P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="v h"
            image="/window-installation.jpg"
            alt="Boston grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Boston grass lawn care" //KW
            desc="O v r s"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="c"
            cardDesc3="a"
            />
            <Approach
            title="Boston grass lawn care" //KW
            desc="e h e e"
            />
            <Intro
            subtitle="Exceptional Boston grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="e e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2=" "
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
        