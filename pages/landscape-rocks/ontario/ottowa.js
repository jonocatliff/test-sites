
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
            title="Ottowa landscape rocks | We'll Take Care Of Everything" 
            desc="Ottowa landscape rocks: i t"
            canonical={`${props.website}/ottowa-landscape-rocks`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa landscape rocks" //KW
            />
            <Header
            title="Ottowa landscape rocks" //KW
            subtitle="i t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r  "
            image="/window-washing.jpg"
            alt="Ottowa landscape rocks"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Ottowa landscape rocks" //KW
            desc="s e u  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="r"
            cardDesc3="l"
            />
            <Approach
            title="Ottowa landscape rocks" //KW
            desc="n t s i"
            />
            <Intro
            subtitle="Exceptional Ottowa landscape rocks" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="u r"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="r"
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
        