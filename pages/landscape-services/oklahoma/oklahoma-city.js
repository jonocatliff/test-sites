
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
            title="Oklahoma City landscape services | We'll Take Care Of Everything" 
            desc="Oklahoma City landscape services: r o"
            canonical={`${props.website}/oklahoma-city-landscape-services`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City landscape services" //KW
            />
            <Header
            title="Oklahoma City landscape services" //KW
            subtitle="r o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a a"
            image="/window-installations.jpg"
            alt="Oklahoma City landscape services"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oklahoma City landscape services" //KW
            desc="O t o  "
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="p"
            cardDesc3="t"
            />
            <Approach
            title="Oklahoma City landscape services" //KW
            desc="h r o t"
            />
            <Intro
            subtitle="Exceptional Oklahoma City landscape services" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="y e"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="c"
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
        