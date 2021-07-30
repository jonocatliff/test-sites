
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
            title="Charlotte landscaping company | We'll Take Care Of Everything" 
            desc="Charlotte landscaping company: o  "
            canonical={`${props.website}/charlotte-landscaping-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte landscaping company" //KW
            />
            <Header
            title="Charlotte landscaping company" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="e  "
            image="/window-installation.jpg"
            alt="Charlotte landscaping company"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Charlotte landscaping company" //KW
            desc="n s   w"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="s"
            cardDesc3="c"
            />
            <Approach
            title="Charlotte landscaping company" //KW
            desc="  r d  "
            />
            <Intro
            subtitle="Exceptional Charlotte landscaping company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e  "
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
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
        