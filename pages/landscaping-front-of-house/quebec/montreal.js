
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
            title="Montreal landscaping front of house | We'll Take Care Of Everything" 
            desc="Montreal landscaping front of house: e f"
            canonical={`${props.website}/montreal-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal landscaping front of house" //KW
            />
            <Header
            title="Montreal landscaping front of house" //KW
            subtitle="e f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="c  "
            image="/window-installations.jpg"
            alt="Montreal landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Montreal landscaping front of house" //KW
            desc="a a e s"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="e"
            cardDesc3="p"
            />
            <Approach
            title="Montreal landscaping front of house" //KW
            desc="g   o v"
            />
            <Intro
            subtitle="Exceptional Montreal landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="t y"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="O" //KW
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
        