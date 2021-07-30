
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
            title="Philadelphia hedge trimming services | We'll Take Care Of Everything" 
            desc="Philadelphia hedge trimming services:   n"
            canonical={`${props.website}/philadelphia-hedge-trimming-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia hedge trimming services" //KW
            />
            <Header
            title="Philadelphia hedge trimming services" //KW
            subtitle="  n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o g"
            image="/window-washing.jpg"
            alt="Philadelphia hedge trimming services"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia hedge trimming services" //KW
            desc="o   v n"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="s"
            cardDesc3="A"
            />
            <Approach
            title="Philadelphia hedge trimming services" //KW
            desc="o e n ."
            />
            <Intro
            subtitle="Exceptional Philadelphia hedge trimming services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n t"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2=" "
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
        