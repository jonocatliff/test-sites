
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
            title="San Jose skylight window replacement | We'll Take Care Of Everything" 
            desc="San Jose skylight window replacement: w i"
            canonical={`${props.website}/san-jose-skylight-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Jose skylight window replacement" //KW
            />
            <Header
            title="San Jose skylight window replacement" //KW
            subtitle="w i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t f"
            image="/window-installations.jpg"
            alt="San Jose skylight window replacement"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Jose skylight window replacement" //KW
            desc="  d i r"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="w"
            cardDesc3="p"
            />
            <Approach
            title="San Jose skylight window replacement" //KW
            desc="n e o n"
            />
            <Intro
            subtitle="Exceptional San Jose skylight window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t o"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="a"
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
        