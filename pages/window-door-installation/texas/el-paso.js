
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
            title="El Paso window door installation | We'll Take Care Of Everything" 
            desc="El Paso window door installation: r i"
            canonical={`${props.website}/el-paso-window-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso window door installation" //KW
            />
            <Header
            title="El Paso window door installation" //KW
            subtitle="r i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="k e"
            image="/window-installations.jpg"
            alt="El Paso window door installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional El Paso window door installation" //KW
            desc="p i m g"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="d"
            cardDesc3="A"
            />
            <Approach
            title="El Paso window door installation" //KW
            desc="  l w b"
            />
            <Intro
            subtitle="Exceptional El Paso window door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="c f"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="n"
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
        