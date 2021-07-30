
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
            title="Tucson landscape design services | We'll Take Care Of Everything" 
            desc="Tucson landscape design services: e g"
            canonical={`${props.website}/tucson-landscape-design-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson landscape design services" //KW
            />
            <Header
            title="Tucson landscape design services" //KW
            subtitle="e g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="t t"
            image="/window-installations.jpg"
            alt="Tucson landscape design services"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Tucson landscape design services" //KW
            desc="t t s r"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="n"
            cardDesc3="e"
            />
            <Approach
            title="Tucson landscape design services" //KW
            desc="o o u ’"
            />
            <Intro
            subtitle="Exceptional Tucson landscape design services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="n v"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2=" "
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
        