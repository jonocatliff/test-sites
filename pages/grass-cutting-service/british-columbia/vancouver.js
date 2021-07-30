
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
            title="Vancouver grass cutting service | We'll Take Care Of Everything" 
            desc="Vancouver grass cutting service: a a"
            canonical={`${props.website}/vancouver-grass-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver grass cutting service" //KW
            />
            <Header
            title="Vancouver grass cutting service" //KW
            subtitle="a a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  W"
            image="/window-installation.jpg"
            alt="Vancouver grass cutting service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Vancouver grass cutting service" //KW
            desc="i   t o"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="e"
            cardDesc3="s"
            />
            <Approach
            title="Vancouver grass cutting service" //KW
            desc=", i n c"
            />
            <Intro
            subtitle="Exceptional Vancouver grass cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="o  "
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="f"
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
        