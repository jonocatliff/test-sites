
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
            title="Tucson hedge cutting services | We'll Take Care Of Everything" 
            desc="Tucson hedge cutting services: i  "
            canonical={`${props.website}/tucson-hedge-cutting-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson hedge cutting services" //KW
            />
            <Header
            title="Tucson hedge cutting services" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n a"
            image="/window-installation.jpg"
            alt="Tucson hedge cutting services"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Tucson hedge cutting services" //KW
            desc="u u a d"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Tucson hedge cutting services" //KW
            desc="    t r"
            />
            <Intro
            subtitle="Exceptional Tucson hedge cutting services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="c r"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="o"
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
        