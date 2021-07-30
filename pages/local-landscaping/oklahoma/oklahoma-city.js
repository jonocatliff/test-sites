
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
            title="Oklahoma City local landscaping | We'll Take Care Of Everything" 
            desc="Oklahoma City local landscaping: d o"
            canonical={`${props.website}/oklahoma-city-local-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City local landscaping" //KW
            />
            <Header
            title="Oklahoma City local landscaping" //KW
            subtitle="d o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="u i"
            image="/window-installation.jpg"
            alt="Oklahoma City local landscaping"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oklahoma City local landscaping" //KW
            desc="e t i i"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="s"
            cardDesc3="e"
            />
            <Approach
            title="Oklahoma City local landscaping" //KW
            desc="i a w v"
            />
            <Intro
            subtitle="Exceptional Oklahoma City local landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="c c"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
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
        