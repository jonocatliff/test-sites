
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
            title="Jacksonville grass care | We'll Take Care Of Everything" 
            desc="Jacksonville grass care: c v"
            canonical={`${props.website}/jacksonville-grass-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville grass care" //KW
            />
            <Header
            title="Jacksonville grass care" //KW
            subtitle="c v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="s i"
            image="/window-installation.jpg"
            alt="Jacksonville grass care"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Jacksonville grass care" //KW
            desc="s s e i"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="r"
            cardDesc3="n"
            />
            <Approach
            title="Jacksonville grass care" //KW
            desc="o p u t"
            />
            <Intro
            subtitle="Exceptional Jacksonville grass care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="f F"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="e"
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
        