
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
            title="Indianapolis best window installers | We'll Take Care Of Everything" 
            desc="Indianapolis best window installers: w r"
            canonical={`${props.website}/indianapolis-best-window-installers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis best window installers" //KW
            />
            <Header
            title="Indianapolis best window installers" //KW
            subtitle="w r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a e"
            image="/window-installations.jpg"
            alt="Indianapolis best window installers"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Indianapolis best window installers" //KW
            desc="l i O e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="w"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="t"
            cardDesc3="l"
            />
            <Approach
            title="Indianapolis best window installers" //KW
            desc="d i   n"
            />
            <Intro
            subtitle="Exceptional Indianapolis best window installers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="i e"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        