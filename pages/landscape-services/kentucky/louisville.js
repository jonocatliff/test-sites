
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
            title="Louisville landscape services | We'll Take Care Of Everything" 
            desc="Louisville landscape services: , i"
            canonical={`${props.website}/louisville-landscape-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville landscape services" //KW
            />
            <Header
            title="Louisville landscape services" //KW
            subtitle=", i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="w o"
            image="/window-washing.jpg"
            alt="Louisville landscape services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Louisville landscape services" //KW
            desc="  l   s"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="y"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="v"
            cardDesc3=" "
            />
            <Approach
            title="Louisville landscape services" //KW
            desc="r a T  "
            />
            <Intro
            subtitle="Exceptional Louisville landscape services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r e"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
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
        