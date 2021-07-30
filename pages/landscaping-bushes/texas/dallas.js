
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
            title="Dallas landscaping bushes | We'll Take Care Of Everything" 
            desc="Dallas landscaping bushes: y u"
            canonical={`${props.website}/dallas-landscaping-bushes`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas landscaping bushes" //KW
            />
            <Header
            title="Dallas landscaping bushes" //KW
            subtitle="y u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s a"
            image="/window-installations.jpg"
            alt="Dallas landscaping bushes"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Dallas landscaping bushes" //KW
            desc="m i    "
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="n"
            cardDesc3="e"
            />
            <Approach
            title="Dallas landscaping bushes" //KW
            desc="w p n r"
            />
            <Intro
            subtitle="Exceptional Dallas landscaping bushes" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a e"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="m"
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
        