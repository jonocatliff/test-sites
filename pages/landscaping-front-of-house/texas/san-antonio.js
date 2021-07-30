
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
            title="San Antonio landscaping front of house | We'll Take Care Of Everything" 
            desc="San Antonio landscaping front of house: a l"
            canonical={`${props.website}/san-antonio-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio landscaping front of house" //KW
            />
            <Header
            title="San Antonio landscaping front of house" //KW
            subtitle="a l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="f i"
            image="/window-installations.jpg"
            alt="San Antonio landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional San Antonio landscaping front of house" //KW
            desc="u   r l"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="m"
            cardDesc3="l"
            />
            <Approach
            title="San Antonio landscaping front of house" //KW
            desc="r u   o"
            />
            <Intro
            subtitle="Exceptional San Antonio landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="r s"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="e"
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
        