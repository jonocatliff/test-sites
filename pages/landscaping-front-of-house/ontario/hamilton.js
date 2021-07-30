
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
            title="Hamilton landscaping front of house | We'll Take Care Of Everything" 
            desc="Hamilton landscaping front of house:   n"
            canonical={`${props.website}/hamilton-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton landscaping front of house" //KW
            />
            <Header
            title="Hamilton landscaping front of house" //KW
            subtitle="  n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s r"
            image="/contractor.jpg"
            alt="Hamilton landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Hamilton landscaping front of house" //KW
            desc="p p s  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="s"
            cardDesc3="n"
            />
            <Approach
            title="Hamilton landscaping front of house" //KW
            desc="d     r"
            />
            <Intro
            subtitle="Exceptional Hamilton landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="s F"
            cardDesc3="u"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        