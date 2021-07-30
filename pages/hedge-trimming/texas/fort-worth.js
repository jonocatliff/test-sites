
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
            title="Fort Worth hedge trimming | We'll Take Care Of Everything" 
            desc="Fort Worth hedge trimming: b ."
            canonical={`${props.website}/fort-worth-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth hedge trimming" //KW
            />
            <Header
            title="Fort Worth hedge trimming" //KW
            subtitle="b ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a h"
            image="/window-washing.jpg"
            alt="Fort Worth hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Fort Worth hedge trimming" //KW
            desc="o e t  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="l"
            cardDesc3="f"
            />
            <Approach
            title="Fort Worth hedge trimming" //KW
            desc="i h   u"
            />
            <Intro
            subtitle="Exceptional Fort Worth hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="r c"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="m"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        