
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
            title="Surrey home window installation | We'll Take Care Of Everything" 
            desc="Surrey home window installation: , e"
            canonical={`${props.website}/surrey-home-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey home window installation" //KW
            />
            <Header
            title="Surrey home window installation" //KW
            subtitle=", e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w n"
            image="/contractor.jpg"
            alt="Surrey home window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Surrey home window installation" //KW
            desc="y l r i"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="i"
            cardDesc3="t"
            />
            <Approach
            title="Surrey home window installation" //KW
            desc="o     r"
            />
            <Intro
            subtitle="Exceptional Surrey home window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="s"
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
        