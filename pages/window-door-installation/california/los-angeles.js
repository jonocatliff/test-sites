
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
            title="Los Angeles window door installation | We'll Take Care Of Everything" 
            desc="Los Angeles window door installation: a  "
            canonical={`${props.website}/los-angeles-window-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles window door installation" //KW
            />
            <Header
            title="Los Angeles window door installation" //KW
            subtitle="a  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i e"
            image="/contractor.jpg"
            alt="Los Angeles window door installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Los Angeles window door installation" //KW
            desc="h   s d"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="k"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="s"
            cardDesc3="e"
            />
            <Approach
            title="Los Angeles window door installation" //KW
            desc="  p y  "
            />
            <Intro
            subtitle="Exceptional Los Angeles window door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="l t"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="i"
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
        