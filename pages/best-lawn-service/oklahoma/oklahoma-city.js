
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
            title="Oklahoma City best lawn service | We'll Take Care Of Everything" 
            desc="Oklahoma City best lawn service: d O"
            canonical={`${props.website}/oklahoma-city-best-lawn-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City best lawn service" //KW
            />
            <Header
            title="Oklahoma City best lawn service" //KW
            subtitle="d O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  i"
            image="/contractor.jpg"
            alt="Oklahoma City best lawn service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City best lawn service" //KW
            desc="m r s r"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="a"
            />
            <Approach
            title="Oklahoma City best lawn service" //KW
            desc="t   h  "
            />
            <Intro
            subtitle="Exceptional Oklahoma City best lawn service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="n r"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="f" //KW
            desc2="u"
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
        