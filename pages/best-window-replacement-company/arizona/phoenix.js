
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
            title="Phoenix best window replacement company | We'll Take Care Of Everything" 
            desc="Phoenix best window replacement company: t ."
            canonical={`${props.website}/phoenix-best-window-replacement-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix best window replacement company" //KW
            />
            <Header
            title="Phoenix best window replacement company" //KW
            subtitle="t ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n t"
            image="/window-washing.jpg"
            alt="Phoenix best window replacement company"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Phoenix best window replacement company" //KW
            desc="  A c i"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="e"
            cardDesc3="v"
            />
            <Approach
            title="Phoenix best window replacement company" //KW
            desc="c e t s"
            />
            <Intro
            subtitle="Exceptional Phoenix best window replacement company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="e o"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="a"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        