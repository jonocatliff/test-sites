
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
            title="Albuquerque window installation contractor | We'll Take Care Of Everything" 
            desc="Albuquerque window installation contractor: c m"
            canonical={`${props.website}/albuquerque-window-installation-contractor`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque window installation contractor" //KW
            />
            <Header
            title="Albuquerque window installation contractor" //KW
            subtitle="c m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="n  "
            image="/contractor.jpg"
            alt="Albuquerque window installation contractor"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Albuquerque window installation contractor" //KW
            desc="e t   w"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="u"
            cardDesc3="w"
            />
            <Approach
            title="Albuquerque window installation contractor" //KW
            desc="e t   t"
            />
            <Intro
            subtitle="Exceptional Albuquerque window installation contractor" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="O"
            cardDesc2="e s"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="-"
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
        