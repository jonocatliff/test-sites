
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
            title="Boston commercial window installation | We'll Take Care Of Everything" 
            desc="Boston commercial window installation: . m"
            canonical={`${props.website}/boston-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston commercial window installation" //KW
            />
            <Header
            title="Boston commercial window installation" //KW
            subtitle=". m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  n"
            image="/window-washing.jpg"
            alt="Boston commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Boston commercial window installation" //KW
            desc="w w o n"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="r"
            cardDesc3="k"
            />
            <Approach
            title="Boston commercial window installation" //KW
            desc="y t t o"
            />
            <Intro
            subtitle="Exceptional Boston commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="  i"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="p"
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
        