
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
            title="Oshawa door glass window replacement | We'll Take Care Of Everything" 
            desc="Oshawa door glass window replacement:   c"
            canonical={`${props.website}/oshawa-door-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa door glass window replacement" //KW
            />
            <Header
            title="Oshawa door glass window replacement" //KW
            subtitle="  c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc=", h"
            image="/window-installation.jpg"
            alt="Oshawa door glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oshawa door glass window replacement" //KW
            desc="s t h i"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Oshawa door glass window replacement" //KW
            desc=", r i n"
            />
            <Intro
            subtitle="Exceptional Oshawa door glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="g w"
            cardDesc3="b"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="u"
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
        