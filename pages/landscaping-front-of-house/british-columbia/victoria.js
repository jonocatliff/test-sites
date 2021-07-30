
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
            title="Victoria landscaping front of house | We'll Take Care Of Everything" 
            desc="Victoria landscaping front of house: e a"
            canonical={`${props.website}/victoria-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria landscaping front of house" //KW
            />
            <Header
            title="Victoria landscaping front of house" //KW
            subtitle="e a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r h"
            image="/window-installations.jpg"
            alt="Victoria landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Victoria landscaping front of house" //KW
            desc="y o m m"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="r"
            cardDesc3="a"
            />
            <Approach
            title="Victoria landscaping front of house" //KW
            desc="e o a l"
            />
            <Intro
            subtitle="Exceptional Victoria landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="o m"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        