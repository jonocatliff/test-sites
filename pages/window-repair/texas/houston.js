
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
            title="Houston window repair | We'll Take Care Of Everything" 
            desc="Houston window repair: u  "
            canonical={`${props.website}/houston-window-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston window repair" //KW
            />
            <Header
            title="Houston window repair" //KW
            subtitle="u  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  e"
            image="/window-washing.jpg"
            alt="Houston window repair"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Houston window repair" //KW
            desc="n a . o"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="y"
            cardDesc3=" "
            />
            <Approach
            title="Houston window repair" //KW
            desc=", g n o"
            />
            <Intro
            subtitle="Exceptional Houston window repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="  o"
            cardDesc3="A"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="s"
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
        