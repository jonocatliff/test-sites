
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
            title="Ottowa best window installers | We'll Take Care Of Everything" 
            desc="Ottowa best window installers: i o"
            canonical={`${props.website}/ottowa-best-window-installers`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa best window installers" //KW
            />
            <Header
            title="Ottowa best window installers" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="p g"
            image="/window-installations.jpg"
            alt="Ottowa best window installers"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Ottowa best window installers" //KW
            desc="e l f e"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3="h"
            />
            <Approach
            title="Ottowa best window installers" //KW
            desc="n r i o"
            />
            <Intro
            subtitle="Exceptional Ottowa best window installers" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="y e"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="W"
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
        