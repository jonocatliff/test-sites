
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
            title="Victoria front garden landscaping | We'll Take Care Of Everything" 
            desc="Victoria front garden landscaping: r e"
            canonical={`${props.website}/victoria-front-garden-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria front garden landscaping" //KW
            />
            <Header
            title="Victoria front garden landscaping" //KW
            subtitle="r e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="b o"
            image="/window-washing.jpg"
            alt="Victoria front garden landscaping"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Victoria front garden landscaping" //KW
            desc="p a x o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Victoria front garden landscaping" //KW
            desc="e h c i"
            />
            <Intro
            subtitle="Exceptional Victoria front garden landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i f"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="i"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        