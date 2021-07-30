
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
            title="Vancouver landscaping front of house | We'll Take Care Of Everything" 
            desc="Vancouver landscaping front of house:   e"
            canonical={`${props.website}/vancouver-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Vancouver landscaping front of house" //KW
            />
            <Header
            title="Vancouver landscaping front of house" //KW
            subtitle="  e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d c"
            image="/window-washing.jpg"
            alt="Vancouver landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Vancouver landscaping front of house" //KW
            desc="m o , e"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="Vancouver landscaping front of house" //KW
            desc="d e   e"
            />
            <Intro
            subtitle="Exceptional Vancouver landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n a"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="n"
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
        