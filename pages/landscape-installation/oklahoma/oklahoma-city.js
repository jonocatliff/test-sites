
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
            title="Oklahoma City landscape installation | We'll Take Care Of Everything" 
            desc="Oklahoma City landscape installation: v e"
            canonical={`${props.website}/oklahoma-city-landscape-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City landscape installation" //KW
            />
            <Header
            title="Oklahoma City landscape installation" //KW
            subtitle="v e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="f n"
            image="/window-washing.jpg"
            alt="Oklahoma City landscape installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Oklahoma City landscape installation" //KW
            desc="W i p f"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="e"
            cardDesc3=" "
            />
            <Approach
            title="Oklahoma City landscape installation" //KW
            desc="d s n  "
            />
            <Intro
            subtitle="Exceptional Oklahoma City landscape installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="e s"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="p" //KW
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
        