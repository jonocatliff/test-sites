
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
            title="Winnipeg grass cutting service | We'll Take Care Of Everything" 
            desc="Winnipeg grass cutting service: r  "
            canonical={`${props.website}/winnipeg-grass-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg grass cutting service" //KW
            />
            <Header
            title="Winnipeg grass cutting service" //KW
            subtitle="r  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o  "
            image="/window-installation.jpg"
            alt="Winnipeg grass cutting service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Winnipeg grass cutting service" //KW
            desc="n h n i"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2="r"
            cardDesc3="I"
            />
            <Approach
            title="Winnipeg grass cutting service" //KW
            desc="y   u e"
            />
            <Intro
            subtitle="Exceptional Winnipeg grass cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t u"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="o"
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
        