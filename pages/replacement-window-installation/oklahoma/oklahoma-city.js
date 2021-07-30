
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
            title="Oklahoma City replacement window installation | We'll Take Care Of Everything" 
            desc="Oklahoma City replacement window installation: i e"
            canonical={`${props.website}/oklahoma-city-replacement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City replacement window installation" //KW
            />
            <Header
            title="Oklahoma City replacement window installation" //KW
            subtitle="i e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a a"
            image="/window-installation.jpg"
            alt="Oklahoma City replacement window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Oklahoma City replacement window installation" //KW
            desc="  a   t"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Oklahoma City replacement window installation" //KW
            desc="  a e o"
            />
            <Intro
            subtitle="Exceptional Oklahoma City replacement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i  "
            cardDesc3="p"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="w"
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
        