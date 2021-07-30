
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
            title="Boston lawn seeding | We'll Take Care Of Everything" 
            desc="Boston lawn seeding: p i"
            canonical={`${props.website}/boston-lawn-seeding`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston lawn seeding" //KW
            />
            <Header
            title="Boston lawn seeding" //KW
            subtitle="p i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r r"
            image="/window-installations.jpg"
            alt="Boston lawn seeding"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Boston lawn seeding" //KW
            desc="m k a h"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="w"
            cardDesc3="c"
            />
            <Approach
            title="Boston lawn seeding" //KW
            desc="r   d i"
            />
            <Intro
            subtitle="Exceptional Boston lawn seeding" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="  n"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="'" //KW
            desc2=","
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
        