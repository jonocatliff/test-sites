
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
            title="Victoria concrete landscaping | We'll Take Care Of Everything" 
            desc="Victoria concrete landscaping: n e"
            canonical={`${props.website}/victoria-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria concrete landscaping" //KW
            />
            <Header
            title="Victoria concrete landscaping" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="e h"
            image="/window-installations.jpg"
            alt="Victoria concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Victoria concrete landscaping" //KW
            desc="  e a ."
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="n"
            cardDesc3="l"
            />
            <Approach
            title="Victoria concrete landscaping" //KW
            desc="a a   s"
            />
            <Intro
            subtitle="Exceptional Victoria concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="l u"
            cardDesc3="e"
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
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        