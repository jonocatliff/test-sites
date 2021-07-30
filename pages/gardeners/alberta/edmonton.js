
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
            title="Edmonton gardeners | We'll Take Care Of Everything" 
            desc="Edmonton gardeners: i a"
            canonical={`${props.website}/edmonton-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton gardeners" //KW
            />
            <Header
            title="Edmonton gardeners" //KW
            subtitle="i a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r  "
            image="/window-installations.jpg"
            alt="Edmonton gardeners"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Edmonton gardeners" //KW
            desc="y n o  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="g"
            cardDesc3="."
            />
            <Approach
            title="Edmonton gardeners" //KW
            desc="t m y y"
            />
            <Intro
            subtitle="Exceptional Edmonton gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="x  "
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
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
        