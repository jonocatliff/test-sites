
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
            title="Nashville yard drainage | We'll Take Care Of Everything" 
            desc="Nashville yard drainage: t y"
            canonical={`${props.website}/nashville-yard-drainage`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville yard drainage" //KW
            />
            <Header
            title="Nashville yard drainage" //KW
            subtitle="t y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="   "
            image="/contractor.jpg"
            alt="Nashville yard drainage"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Nashville yard drainage" //KW
            desc="s l r undefined"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Nashville yard drainage" //KW
            desc="n   i  "
            />
            <Intro
            subtitle="Exceptional Nashville yard drainage" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="w undefined"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2=" "
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
        