
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
            title="Houston lawn maintenance | We'll Take Care Of Everything" 
            desc="Houston lawn maintenance: o s"
            canonical={`${props.website}/houston-lawn-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston lawn maintenance" //KW
            />
            <Header
            title="Houston lawn maintenance" //KW
            subtitle="o s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="h n"
            image="/window-installations.jpg"
            alt="Houston lawn maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Houston lawn maintenance" //KW
            desc=",   T t"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="u"
            cardDesc3=" "
            />
            <Approach
            title="Houston lawn maintenance" //KW
            desc="y u e s"
            />
            <Intro
            subtitle="Exceptional Houston lawn maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="o o"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
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
        