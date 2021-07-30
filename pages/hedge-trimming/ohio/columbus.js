
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
            title="Columbus hedge trimming | We'll Take Care Of Everything" 
            desc="Columbus hedge trimming: a h"
            canonical={`${props.website}/columbus-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus hedge trimming" //KW
            />
            <Header
            title="Columbus hedge trimming" //KW
            subtitle="a h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="h  "
            image="/contractor.jpg"
            alt="Columbus hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus hedge trimming" //KW
            desc="y s   r"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Columbus hedge trimming" //KW
            desc="w c . s"
            />
            <Intro
            subtitle="Exceptional Columbus hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="o i"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="e"
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
        