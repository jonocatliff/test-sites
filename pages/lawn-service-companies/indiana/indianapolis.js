
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
            title="Indianapolis lawn service companies | We'll Take Care Of Everything" 
            desc="Indianapolis lawn service companies: n n"
            canonical={`${props.website}/indianapolis-lawn-service-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis lawn service companies" //KW
            />
            <Header
            title="Indianapolis lawn service companies" //KW
            subtitle="n n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a e"
            image="/window-washing.jpg"
            alt="Indianapolis lawn service companies"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Indianapolis lawn service companies" //KW
            desc="  n p x"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="v"
            cardDesc3="."
            />
            <Approach
            title="Indianapolis lawn service companies" //KW
            desc="c e t i"
            />
            <Intro
            subtitle="Exceptional Indianapolis lawn service companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="e o"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
            desc2="n"
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
        