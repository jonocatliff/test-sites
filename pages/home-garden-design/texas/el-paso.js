
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
            title="El Paso home garden design | We'll Take Care Of Everything" 
            desc="El Paso home garden design: o t"
            canonical={`${props.website}/el-paso-home-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="El Paso home garden design" //KW
            />
            <Header
            title="El Paso home garden design" //KW
            subtitle="o t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e i"
            image="/window-washing.jpg"
            alt="El Paso home garden design"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional El Paso home garden design" //KW
            desc="h n i t"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="w"
            cardDesc3=" "
            />
            <Approach
            title="El Paso home garden design" //KW
            desc="r e d p"
            />
            <Intro
            subtitle="Exceptional El Paso home garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="i n"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="o"
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
        