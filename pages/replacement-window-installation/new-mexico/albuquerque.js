
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
            title="Albuquerque replacement window installation | We'll Take Care Of Everything" 
            desc="Albuquerque replacement window installation: n u"
            canonical={`${props.website}/albuquerque-replacement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Albuquerque replacement window installation" //KW
            />
            <Header
            title="Albuquerque replacement window installation" //KW
            subtitle="n u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="f a"
            image="/window-installation.jpg"
            alt="Albuquerque replacement window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Albuquerque replacement window installation" //KW
            desc="  i y e"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Albuquerque replacement window installation" //KW
            desc="e e x s"
            />
            <Intro
            subtitle="Exceptional Albuquerque replacement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="r  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="w"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        