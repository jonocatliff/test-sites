
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
            title="Dallas grass mowing service | We'll Take Care Of Everything" 
            desc="Dallas grass mowing service: h l"
            canonical={`${props.website}/dallas-grass-mowing-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas grass mowing service" //KW
            />
            <Header
            title="Dallas grass mowing service" //KW
            subtitle="h l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i  "
            image="/window-washing.jpg"
            alt="Dallas grass mowing service"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Dallas grass mowing service" //KW
            desc="e d a r"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="a"
            cardDesc3="c"
            />
            <Approach
            title="Dallas grass mowing service" //KW
            desc="r m i  "
            />
            <Intro
            subtitle="Exceptional Dallas grass mowing service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="o  "
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="l"
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
        