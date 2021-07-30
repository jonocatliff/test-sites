
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
            title="Milwaukee garden maintenance services | We'll Take Care Of Everything" 
            desc="Milwaukee garden maintenance services: d  "
            canonical={`${props.website}/milwaukee-garden-maintenance-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee garden maintenance services" //KW
            />
            <Header
            title="Milwaukee garden maintenance services" //KW
            subtitle="d  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  n"
            image="/window-installation.jpg"
            alt="Milwaukee garden maintenance services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Milwaukee garden maintenance services" //KW
            desc="s   r s"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="s"
            cardDesc3="a"
            />
            <Approach
            title="Milwaukee garden maintenance services" //KW
            desc="  c s k"
            />
            <Intro
            subtitle="Exceptional Milwaukee garden maintenance services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="  n"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="v"
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
        