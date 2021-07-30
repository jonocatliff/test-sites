
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
            title="Indianapolis hedge trimming services | We'll Take Care Of Everything" 
            desc="Indianapolis hedge trimming services: a r"
            canonical={`${props.website}/indianapolis-hedge-trimming-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis hedge trimming services" //KW
            />
            <Header
            title="Indianapolis hedge trimming services" //KW
            subtitle="a r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="a e"
            image="/window-washing.jpg"
            alt="Indianapolis hedge trimming services"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Indianapolis hedge trimming services" //KW
            desc="e i l  "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="e"
            cardDesc3="t"
            />
            <Approach
            title="Indianapolis hedge trimming services" //KW
            desc="a - e o"
            />
            <Intro
            subtitle="Exceptional Indianapolis hedge trimming services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="t o"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        