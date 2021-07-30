
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
            title="Oshawa home window replacement companies | We'll Take Care Of Everything" 
            desc="Oshawa home window replacement companies:   w"
            canonical={`${props.website}/oshawa-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa home window replacement companies" //KW
            />
            <Header
            title="Oshawa home window replacement companies" //KW
            subtitle="  w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e h"
            image="/window-installation.jpg"
            alt="Oshawa home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oshawa home window replacement companies" //KW
            desc="o     O"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2=","
            cardDesc3="t"
            />
            <Approach
            title="Oshawa home window replacement companies" //KW
            desc="t v p o"
            />
            <Intro
            subtitle="Exceptional Oshawa home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="v a"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
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
        