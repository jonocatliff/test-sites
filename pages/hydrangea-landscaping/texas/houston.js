
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
            title="Houston hydrangea landscaping | We'll Take Care Of Everything" 
            desc="Houston hydrangea landscaping:   o"
            canonical={`${props.website}/houston-hydrangea-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston hydrangea landscaping" //KW
            />
            <Header
            title="Houston hydrangea landscaping" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s e"
            image="/window-washing.jpg"
            alt="Houston hydrangea landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Houston hydrangea landscaping" //KW
            desc="r c r y"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Houston hydrangea landscaping" //KW
            desc="t g r v"
            />
            <Intro
            subtitle="Exceptional Houston hydrangea landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="  a"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2=","
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
        