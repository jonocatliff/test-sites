
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
            title="Fresno concrete landscaping | We'll Take Care Of Everything" 
            desc="Fresno concrete landscaping: t ."
            canonical={`${props.website}/fresno-concrete-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno concrete landscaping" //KW
            />
            <Header
            title="Fresno concrete landscaping" //KW
            subtitle="t ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a t"
            image="/contractor.jpg"
            alt="Fresno concrete landscaping"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fresno concrete landscaping" //KW
            desc="a   r e"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="p"
            cardDesc3="m"
            />
            <Approach
            title="Fresno concrete landscaping" //KW
            desc="  p u  "
            />
            <Intro
            subtitle="Exceptional Fresno concrete landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="a f"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="r"
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
        