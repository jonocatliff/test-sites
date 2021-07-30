
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
            title="Dallas lawn cutting service | We'll Take Care Of Everything" 
            desc="Dallas lawn cutting service: o t"
            canonical={`${props.website}/dallas-lawn-cutting-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas lawn cutting service" //KW
            />
            <Header
            title="Dallas lawn cutting service" //KW
            subtitle="o t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="d d"
            image="/contractor.jpg"
            alt="Dallas lawn cutting service"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Dallas lawn cutting service" //KW
            desc="a   l t"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="."
            cardDesc2="f"
            cardDesc3="r"
            />
            <Approach
            title="Dallas lawn cutting service" //KW
            desc="y c t i"
            />
            <Intro
            subtitle="Exceptional Dallas lawn cutting service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="y"
            cardDesc2="W  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
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
        