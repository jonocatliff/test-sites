
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
            title="Edmonton commercial window installation | We'll Take Care Of Everything" 
            desc="Edmonton commercial window installation: o a"
            canonical={`${props.website}/edmonton-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton commercial window installation" //KW
            />
            <Header
            title="Edmonton commercial window installation" //KW
            subtitle="o a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="p n"
            image="/window-installations.jpg"
            alt="Edmonton commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Edmonton commercial window installation" //KW
            desc="n s e y"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="p"
            cardDesc3="e"
            />
            <Approach
            title="Edmonton commercial window installation" //KW
            desc="l o k b"
            />
            <Intro
            subtitle="Exceptional Edmonton commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o a"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="P" //KW
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
        