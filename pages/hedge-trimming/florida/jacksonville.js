
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
            title="Jacksonville hedge trimming | We'll Take Care Of Everything" 
            desc="Jacksonville hedge trimming: e n"
            canonical={`${props.website}/jacksonville-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville hedge trimming" //KW
            />
            <Header
            title="Jacksonville hedge trimming" //KW
            subtitle="e n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e ."
            image="/window-installations.jpg"
            alt="Jacksonville hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Jacksonville hedge trimming" //KW
            desc="p i z h"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="Jacksonville hedge trimming" //KW
            desc="h w    "
            />
            <Intro
            subtitle="Exceptional Jacksonville hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="e e"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="c"
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
        