
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
            title="Winnipeg grass cutting companies | We'll Take Care Of Everything" 
            desc="Winnipeg grass cutting companies: r t"
            canonical={`${props.website}/winnipeg-grass-cutting-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg grass cutting companies" //KW
            />
            <Header
            title="Winnipeg grass cutting companies" //KW
            subtitle="r t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e  "
            image="/window-washing.jpg"
            alt="Winnipeg grass cutting companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Winnipeg grass cutting companies" //KW
            desc="b s i o"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="o"
            cardDesc3="c"
            />
            <Approach
            title="Winnipeg grass cutting companies" //KW
            desc="w      "
            />
            <Intro
            subtitle="Exceptional Winnipeg grass cutting companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="l i"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="." //KW
            desc2="w"
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
        