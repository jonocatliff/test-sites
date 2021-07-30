
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
            title="Los Angeles grass mowing service | We'll Take Care Of Everything" 
            desc="Los Angeles grass mowing service: w c"
            canonical={`${props.website}/los-angeles-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles grass mowing service" //KW
            />
            <Header
            title="Los Angeles grass mowing service" //KW
            subtitle="w c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  v"
            image="/contractor.jpg"
            alt="Los Angeles grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Los Angeles grass mowing service" //KW
            desc="  e s t"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="s"
            cardDesc3="w"
            />
            <Approach
            title="Los Angeles grass mowing service" //KW
            desc="e i n ’"
            />
            <Intro
            subtitle="Exceptional Los Angeles grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="w  "
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="A"
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
        