
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
            title="Milwaukee concrete landscaping | We'll Take Care Of Everything" 
            desc="Milwaukee concrete landscaping: e n"
            canonical={`${props.website}/milwaukee-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee concrete landscaping" //KW
            />
            <Header
            title="Milwaukee concrete landscaping" //KW
            subtitle="e n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s t"
            image="/contractor.jpg"
            alt="Milwaukee concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Milwaukee concrete landscaping" //KW
            desc="r o r  "
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Milwaukee concrete landscaping" //KW
            desc="  o t d"
            />
            <Intro
            subtitle="Exceptional Milwaukee concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n s"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="w"
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
        