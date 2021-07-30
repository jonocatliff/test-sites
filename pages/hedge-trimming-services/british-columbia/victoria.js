
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
            title="Victoria hedge trimming services | We'll Take Care Of Everything" 
            desc="Victoria hedge trimming services: e a"
            canonical={`${props.website}/victoria-hedge-trimming-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria hedge trimming services" //KW
            />
            <Header
            title="Victoria hedge trimming services" //KW
            subtitle="e a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r o"
            image="/window-washing.jpg"
            alt="Victoria hedge trimming services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Victoria hedge trimming services" //KW
            desc="  w c e"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="u"
            cardDesc3="w"
            />
            <Approach
            title="Victoria hedge trimming services" //KW
            desc="o o t e"
            />
            <Intro
            subtitle="Exceptional Victoria hedge trimming services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="d  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=","
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
        