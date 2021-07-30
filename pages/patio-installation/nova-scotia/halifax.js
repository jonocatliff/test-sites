
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
            title="Halifax patio installation | We'll Take Care Of Everything" 
            desc="Halifax patio installation: i  "
            canonical={`${props.website}/halifax-patio-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax patio installation" //KW
            />
            <Header
            title="Halifax patio installation" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  s"
            image="/window-installations.jpg"
            alt="Halifax patio installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Halifax patio installation" //KW
            desc="  a n undefined"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3="k"
            />
            <Approach
            title="Halifax patio installation" //KW
            desc="a d r o"
            />
            <Intro
            subtitle="Exceptional Halifax patio installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="m undefined"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="f" //KW
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
        