
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
            title="Boston yard care | We'll Take Care Of Everything" 
            desc="Boston yard care: r i"
            canonical={`${props.website}/boston-yard-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston yard care" //KW
            />
            <Header
            title="Boston yard care" //KW
            subtitle="r i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="l r"
            image="/window-washing.jpg"
            alt="Boston yard care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Boston yard care" //KW
            desc="s e r undefined"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="n"
            cardDesc3="g"
            />
            <Approach
            title="Boston yard care" //KW
            desc="e h p  "
            />
            <Intro
            subtitle="Exceptional Boston yard care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o undefined"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        