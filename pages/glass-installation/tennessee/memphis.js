
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
            title="Memphis glass installation | We'll Take Care Of Everything" 
            desc="Memphis glass installation: b  "
            canonical={`${props.website}/memphis-glass-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis glass installation" //KW
            />
            <Header
            title="Memphis glass installation" //KW
            subtitle="b  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="t e"
            image="/window-installation.jpg"
            alt="Memphis glass installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Memphis glass installation" //KW
            desc="a e r u"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2="r"
            cardDesc3="i"
            />
            <Approach
            title="Memphis glass installation" //KW
            desc="s r   s"
            />
            <Intro
            subtitle="Exceptional Memphis glass installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="r v"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="f"
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
        