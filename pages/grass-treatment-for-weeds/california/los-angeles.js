
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
            title="Los Angeles grass treatment for weeds | We'll Take Care Of Everything" 
            desc="Los Angeles grass treatment for weeds:   r"
            canonical={`${props.website}/los-angeles-grass-treatment-for-weeds`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Los Angeles grass treatment for weeds" //KW
            />
            <Header
            title="Los Angeles grass treatment for weeds" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  a"
            image="/window-installations.jpg"
            alt="Los Angeles grass treatment for weeds"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Los Angeles grass treatment for weeds" //KW
            desc="I W e e"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="o"
            cardDesc3="i"
            />
            <Approach
            title="Los Angeles grass treatment for weeds" //KW
            desc="l s f s"
            />
            <Intro
            subtitle="Exceptional Los Angeles grass treatment for weeds" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="f ,"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="a"
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
        