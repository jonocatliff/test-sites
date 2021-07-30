
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
            title="London window installation contractors | We'll Take Care Of Everything" 
            desc="London window installation contractors: s r"
            canonical={`${props.website}/london-window-installation-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London window installation contractors" //KW
            />
            <Header
            title="London window installation contractors" //KW
            subtitle="s r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  b"
            image="/contractor.jpg"
            alt="London window installation contractors"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional London window installation contractors" //KW
            desc="m t o  "
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="k"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="London window installation contractors" //KW
            desc="w T a f"
            />
            <Intro
            subtitle="Exceptional London window installation contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t n"
            cardDesc3="h"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="n"
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
        