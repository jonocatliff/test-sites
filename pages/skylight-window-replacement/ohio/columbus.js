
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
            title="Columbus skylight window replacement | We'll Take Care Of Everything" 
            desc="Columbus skylight window replacement: w o"
            canonical={`${props.website}/columbus-skylight-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus skylight window replacement" //KW
            />
            <Header
            title="Columbus skylight window replacement" //KW
            subtitle="w o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t n"
            image="/contractor.jpg"
            alt="Columbus skylight window replacement"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Columbus skylight window replacement" //KW
            desc="  l   t"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="t"
            cardDesc3="W"
            />
            <Approach
            title="Columbus skylight window replacement" //KW
            desc="u o i s"
            />
            <Intro
            subtitle="Exceptional Columbus skylight window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t i"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2=" "
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
        