
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
            title="Oklahoma City hedge removal services | We'll Take Care Of Everything" 
            desc="Oklahoma City hedge removal services: o a"
            canonical={`${props.website}/oklahoma-city-hedge-removal-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City hedge removal services" //KW
            />
            <Header
            title="Oklahoma City hedge removal services" //KW
            subtitle="o a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  m"
            image="/window-installation.jpg"
            alt="Oklahoma City hedge removal services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City hedge removal services" //KW
            desc="a c i r"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="n"
            cardDesc3="i"
            />
            <Approach
            title="Oklahoma City hedge removal services" //KW
            desc="  o r a"
            />
            <Intro
            subtitle="Exceptional Oklahoma City hedge removal services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="b  "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="o"
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
        