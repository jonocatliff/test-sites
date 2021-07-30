
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
            title="Columbus vinyl window installation | We'll Take Care Of Everything" 
            desc="Columbus vinyl window installation: i e"
            canonical={`${props.website}/columbus-vinyl-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus vinyl window installation" //KW
            />
            <Header
            title="Columbus vinyl window installation" //KW
            subtitle="i e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="b  "
            image="/contractor.jpg"
            alt="Columbus vinyl window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Columbus vinyl window installation" //KW
            desc="  a c o"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="v"
            cardDesc3="a"
            />
            <Approach
            title="Columbus vinyl window installation" //KW
            desc="n o t ."
            />
            <Intro
            subtitle="Exceptional Columbus vinyl window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="  f"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="v"
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
        