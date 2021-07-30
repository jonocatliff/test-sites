
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
            title="El Paso landscape services | We'll Take Care Of Everything" 
            desc="El Paso landscape services: l  "
            canonical={`${props.website}/el-paso-landscape-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso landscape services" //KW
            />
            <Header
            title="El Paso landscape services" //KW
            subtitle="l  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="   "
            image="/contractor.jpg"
            alt="El Paso landscape services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional El Paso landscape services" //KW
            desc="  i t d"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="s"
            cardDesc3="g"
            />
            <Approach
            title="El Paso landscape services" //KW
            desc="y t   i"
            />
            <Intro
            subtitle="Exceptional El Paso landscape services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="   "
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="o"
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
        