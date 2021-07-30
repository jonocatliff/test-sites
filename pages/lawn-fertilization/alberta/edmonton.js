
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
            title="Edmonton lawn fertilization | We'll Take Care Of Everything" 
            desc="Edmonton lawn fertilization: h d"
            canonical={`${props.website}/edmonton-lawn-fertilization`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton lawn fertilization" //KW
            />
            <Header
            title="Edmonton lawn fertilization" //KW
            subtitle="h d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="p a"
            image="/contractor.jpg"
            alt="Edmonton lawn fertilization"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Edmonton lawn fertilization" //KW
            desc="  o s  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="a"
            cardDesc3="i"
            />
            <Approach
            title="Edmonton lawn fertilization" //KW
            desc="r   o r"
            />
            <Intro
            subtitle="Exceptional Edmonton lawn fertilization" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="w a"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="i"
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
        