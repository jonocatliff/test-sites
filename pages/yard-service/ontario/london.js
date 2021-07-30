
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
            title="London yard service | We'll Take Care Of Everything" 
            desc="London yard service: r s"
            canonical={`${props.website}/london-yard-service`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="London yard service" //KW
            />
            <Header
            title="London yard service" //KW
            subtitle="r s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a t"
            image="/window-washing.jpg"
            alt="London yard service"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional London yard service" //KW
            desc="w ! t undefined"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="London yard service" //KW
            desc="o i y c"
            />
            <Intro
            subtitle="Exceptional London yard service" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="b undefined"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2=","
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
        