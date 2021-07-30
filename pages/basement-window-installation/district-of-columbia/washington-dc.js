
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
            title="Washington DC basement window installation | We'll Take Care Of Everything" 
            desc="Washington DC basement window installation: f g"
            canonical={`${props.website}/washington-dc-basement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC basement window installation" //KW
            />
            <Header
            title="Washington DC basement window installation" //KW
            subtitle="f g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc=", '"
            image="/window-installations.jpg"
            alt="Washington DC basement window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Washington DC basement window installation" //KW
            desc="a i r m"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="i"
            cardDesc3="l"
            />
            <Approach
            title="Washington DC basement window installation" //KW
            desc="s c o o"
            />
            <Intro
            subtitle="Exceptional Washington DC basement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o t"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="n"
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
        