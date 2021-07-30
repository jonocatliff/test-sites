
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
            title="Boston glass window installation | We'll Take Care Of Everything" 
            desc="Boston glass window installation: m P"
            canonical={`${props.website}/boston-glass-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston glass window installation" //KW
            />
            <Header
            title="Boston glass window installation" //KW
            subtitle="m P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n r"
            image="/window-installation.jpg"
            alt="Boston glass window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Boston glass window installation" //KW
            desc="  o w O"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="r"
            cardDesc3="p"
            />
            <Approach
            title="Boston glass window installation" //KW
            desc="n o t  "
            />
            <Intro
            subtitle="Exceptional Boston glass window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="t s"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="v"
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
        