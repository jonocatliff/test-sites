
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
            title="Dallas home window replacement companies | We'll Take Care Of Everything" 
            desc="Dallas home window replacement companies: e u"
            canonical={`${props.website}/dallas-home-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas home window replacement companies" //KW
            />
            <Header
            title="Dallas home window replacement companies" //KW
            subtitle="e u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  o"
            image="/window-installation.jpg"
            alt="Dallas home window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Dallas home window replacement companies" //KW
            desc="w ! n s"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="r"
            cardDesc3="n"
            />
            <Approach
            title="Dallas home window replacement companies" //KW
            desc="a r d o"
            />
            <Intro
            subtitle="Exceptional Dallas home window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2=", t"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="t"
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
        