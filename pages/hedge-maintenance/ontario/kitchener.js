
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
            title="Kitchener hedge maintenance | We'll Take Care Of Everything" 
            desc="Kitchener hedge maintenance: n u"
            canonical={`${props.website}/kitchener-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener hedge maintenance" //KW
            />
            <Header
            title="Kitchener hedge maintenance" //KW
            subtitle="n u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="x i"
            image="/window-installations.jpg"
            alt="Kitchener hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Kitchener hedge maintenance" //KW
            desc="O w    "
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="c"
            cardDesc3=" "
            />
            <Approach
            title="Kitchener hedge maintenance" //KW
            desc="t p d t"
            />
            <Intro
            subtitle="Exceptional Kitchener hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="f f"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="f" //KW
            desc2="a"
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
        