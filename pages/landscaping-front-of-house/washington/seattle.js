
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
            title="Seattle landscaping front of house | We'll Take Care Of Everything" 
            desc="Seattle landscaping front of house:   O"
            canonical={`${props.website}/seattle-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle landscaping front of house" //KW
            />
            <Header
            title="Seattle landscaping front of house" //KW
            subtitle="  O"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  d"
            image="/window-installations.jpg"
            alt="Seattle landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Seattle landscaping front of house" //KW
            desc="o o n s"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Seattle landscaping front of house" //KW
            desc="n o e t"
            />
            <Intro
            subtitle="Exceptional Seattle landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="c n"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="i"
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
        