
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
            title="Milwaukee lawn cutting near me | We'll Take Care Of Everything" 
            desc="Milwaukee lawn cutting near me: A o"
            canonical={`${props.website}/milwaukee-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee lawn cutting near me" //KW
            />
            <Header
            title="Milwaukee lawn cutting near me" //KW
            subtitle="A o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="v i"
            image="/window-washing.jpg"
            alt="Milwaukee lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Milwaukee lawn cutting near me" //KW
            desc="  w s t"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="t"
            cardDesc3="h"
            />
            <Approach
            title="Milwaukee lawn cutting near me" //KW
            desc="h   r h"
            />
            <Intro
            subtitle="Exceptional Milwaukee lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="l k"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2=" "
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
        