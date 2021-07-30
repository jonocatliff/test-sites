
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
            title="San Diego patio landscaping | We'll Take Care Of Everything" 
            desc="San Diego patio landscaping: i Y"
            canonical={`${props.website}/san-diego-patio-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego patio landscaping" //KW
            />
            <Header
            title="San Diego patio landscaping" //KW
            subtitle="i Y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  s"
            image="/window-washing.jpg"
            alt="San Diego patio landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Diego patio landscaping" //KW
            desc="    n undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="i"
            cardDesc3="h"
            />
            <Approach
            title="San Diego patio landscaping" //KW
            desc="t t   r"
            />
            <Intro
            subtitle="Exceptional San Diego patio landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="m undefined"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="b"
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
        