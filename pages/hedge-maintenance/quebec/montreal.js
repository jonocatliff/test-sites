
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
            title="Montreal hedge maintenance | We'll Take Care Of Everything" 
            desc="Montreal hedge maintenance: s l"
            canonical={`${props.website}/montreal-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal hedge maintenance" //KW
            />
            <Header
            title="Montreal hedge maintenance" //KW
            subtitle="s l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="k p"
            image="/window-installation.jpg"
            alt="Montreal hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Montreal hedge maintenance" //KW
            desc="  w o p"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Montreal hedge maintenance" //KW
            desc=".     t"
            />
            <Intro
            subtitle="Exceptional Montreal hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="o f"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="A"
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
        