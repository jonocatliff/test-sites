
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
            title="Memphis irrigation installation | We'll Take Care Of Everything" 
            desc="Memphis irrigation installation: s r"
            canonical={`${props.website}/memphis-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis irrigation installation" //KW
            />
            <Header
            title="Memphis irrigation installation" //KW
            subtitle="s r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s e"
            image="/window-washing.jpg"
            alt="Memphis irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Memphis irrigation installation" //KW
            desc="a   b m"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Memphis irrigation installation" //KW
            desc="i   n n"
            />
            <Intro
            subtitle="Exceptional Memphis irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n l"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2=","
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
        