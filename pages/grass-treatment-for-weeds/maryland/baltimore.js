
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
            title="Baltimore grass treatment for weeds | We'll Take Care Of Everything" 
            desc="Baltimore grass treatment for weeds: a u"
            canonical={`${props.website}/baltimore-grass-treatment-for-weeds`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore grass treatment for weeds" //KW
            />
            <Header
            title="Baltimore grass treatment for weeds" //KW
            subtitle="a u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="p t"
            image="/window-installation.jpg"
            alt="Baltimore grass treatment for weeds"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Baltimore grass treatment for weeds" //KW
            desc="h   d t"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Baltimore grass treatment for weeds" //KW
            desc="d i w p"
            />
            <Intro
            subtitle="Exceptional Baltimore grass treatment for weeds" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="r e"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="e"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        