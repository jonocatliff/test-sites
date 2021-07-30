
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
            title="London landscaping services | We'll Take Care Of Everything" 
            desc="London landscaping services: i s"
            canonical={`${props.website}/london-landscaping-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London landscaping services" //KW
            />
            <Header
            title="London landscaping services" //KW
            subtitle="i s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o  "
            image="/window-installation.jpg"
            alt="London landscaping services"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional London landscaping services" //KW
            desc="e   h  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="n"
            />
            <Approach
            title="London landscaping services" //KW
            desc="t d e u"
            />
            <Intro
            subtitle="Exceptional London landscaping services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o o"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2=" "
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
        