
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
            title="Boston landscape curbing | We'll Take Care Of Everything" 
            desc="Boston landscape curbing: n P"
            canonical={`${props.website}/boston-landscape-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston landscape curbing" //KW
            />
            <Header
            title="Boston landscape curbing" //KW
            subtitle="n P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  r"
            image="/window-installation.jpg"
            alt="Boston landscape curbing"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Boston landscape curbing" //KW
            desc="a t u e"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="e"
            cardDesc3="i"
            />
            <Approach
            title="Boston landscape curbing" //KW
            desc="P   i ."
            />
            <Intro
            subtitle="Exceptional Boston landscape curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="  r"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2=" "
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
        