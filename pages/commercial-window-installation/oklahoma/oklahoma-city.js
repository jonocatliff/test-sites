
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
            title="Oklahoma City commercial window installation | We'll Take Care Of Everything" 
            desc="Oklahoma City commercial window installation: i d"
            canonical={`${props.website}/oklahoma-city-commercial-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City commercial window installation" //KW
            />
            <Header
            title="Oklahoma City commercial window installation" //KW
            subtitle="i d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s a"
            image="/window-washing.jpg"
            alt="Oklahoma City commercial window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Oklahoma City commercial window installation" //KW
            desc="a w   e"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="e"
            cardDesc3="h"
            />
            <Approach
            title="Oklahoma City commercial window installation" //KW
            desc="n o w r"
            />
            <Intro
            subtitle="Exceptional Oklahoma City commercial window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="s o"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="d"
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
        