
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
            title="El Paso hydrangea landscaping | We'll Take Care Of Everything" 
            desc="El Paso hydrangea landscaping: o f"
            canonical={`${props.website}/el-paso-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso hydrangea landscaping" //KW
            />
            <Header
            title="El Paso hydrangea landscaping" //KW
            subtitle="o f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o r"
            image="/window-installations.jpg"
            alt="El Paso hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional El Paso hydrangea landscaping" //KW
            desc="  i a f"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="El Paso hydrangea landscaping" //KW
            desc="n e w o"
            />
            <Intro
            subtitle="Exceptional El Paso hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="x  "
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="p"
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
        