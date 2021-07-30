
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
            title="Albuquerque flower bed landscaping | We'll Take Care Of Everything" 
            desc="Albuquerque flower bed landscaping: o P"
            canonical={`${props.website}/albuquerque-flower-bed-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque flower bed landscaping" //KW
            />
            <Header
            title="Albuquerque flower bed landscaping" //KW
            subtitle="o P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e o"
            image="/contractor.jpg"
            alt="Albuquerque flower bed landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Albuquerque flower bed landscaping" //KW
            desc="  k i x"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="l"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="Albuquerque flower bed landscaping" //KW
            desc="e t   t"
            />
            <Intro
            subtitle="Exceptional Albuquerque flower bed landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e x"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="s"
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
        