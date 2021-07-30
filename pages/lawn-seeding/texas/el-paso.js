
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
            title="El Paso lawn seeding | We'll Take Care Of Everything" 
            desc="El Paso lawn seeding: a e"
            canonical={`${props.website}/el-paso-lawn-seeding`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso lawn seeding" //KW
            />
            <Header
            title="El Paso lawn seeding" //KW
            subtitle="a e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e  "
            image="/window-washing.jpg"
            alt="El Paso lawn seeding"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional El Paso lawn seeding" //KW
            desc="  w s t"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=","
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="e"
            cardDesc3="o"
            />
            <Approach
            title="El Paso lawn seeding" //KW
            desc="y e l b"
            />
            <Intro
            subtitle="Exceptional El Paso lawn seeding" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="t d"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
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
        