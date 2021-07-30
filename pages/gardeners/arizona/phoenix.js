
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
            title="Phoenix gardeners | We'll Take Care Of Everything" 
            desc="Phoenix gardeners: r ’"
            canonical={`${props.website}/phoenix-gardeners`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix gardeners" //KW
            />
            <Header
            title="Phoenix gardeners" //KW
            subtitle="r ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  t"
            image="/window-installations.jpg"
            alt="Phoenix gardeners"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Phoenix gardeners" //KW
            desc="  i n p"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="Phoenix gardeners" //KW
            desc="h   t  "
            />
            <Intro
            subtitle="Exceptional Phoenix gardeners" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2=".  "
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="y"
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
        