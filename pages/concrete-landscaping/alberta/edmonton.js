
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
            title="Edmonton concrete landscaping | We'll Take Care Of Everything" 
            desc="Edmonton concrete landscaping: s t"
            canonical={`${props.website}/edmonton-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton concrete landscaping" //KW
            />
            <Header
            title="Edmonton concrete landscaping" //KW
            subtitle="s t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o r"
            image="/contractor.jpg"
            alt="Edmonton concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Edmonton concrete landscaping" //KW
            desc="y   o r"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="Edmonton concrete landscaping" //KW
            desc="  c n s"
            />
            <Intro
            subtitle="Exceptional Edmonton concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="   "
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="k"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        