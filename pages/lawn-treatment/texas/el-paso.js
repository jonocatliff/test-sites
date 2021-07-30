
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
            title="El Paso lawn treatment | We'll Take Care Of Everything" 
            desc="El Paso lawn treatment: n l"
            canonical={`${props.website}/el-paso-lawn-treatment`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso lawn treatment" //KW
            />
            <Header
            title="El Paso lawn treatment" //KW
            subtitle="n l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a w"
            image="/window-washing.jpg"
            alt="El Paso lawn treatment"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional El Paso lawn treatment" //KW
            desc="e o e w"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="e"
            cardDesc3="e"
            />
            <Approach
            title="El Paso lawn treatment" //KW
            desc="o s n d"
            />
            <Intro
            subtitle="Exceptional El Paso lawn treatment" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="  v"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2=" "
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
        