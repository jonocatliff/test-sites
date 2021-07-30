
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
            title="Indianapolis landscape curbing | We'll Take Care Of Everything" 
            desc="Indianapolis landscape curbing:   t"
            canonical={`${props.website}/indianapolis-landscape-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis landscape curbing" //KW
            />
            <Header
            title="Indianapolis landscape curbing" //KW
            subtitle="  t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="n e"
            image="/window-installation.jpg"
            alt="Indianapolis landscape curbing"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Indianapolis landscape curbing" //KW
            desc="i p c a"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="m"
            cardDesc3="I"
            />
            <Approach
            title="Indianapolis landscape curbing" //KW
            desc="t s e  "
            />
            <Intro
            subtitle="Exceptional Indianapolis landscape curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="s r"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="p"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        