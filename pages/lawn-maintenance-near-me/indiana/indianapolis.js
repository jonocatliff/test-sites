
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
            title="Indianapolis lawn maintenance near me | We'll Take Care Of Everything" 
            desc="Indianapolis lawn maintenance near me:   r"
            canonical={`${props.website}/indianapolis-lawn-maintenance-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Indianapolis lawn maintenance near me" //KW
            />
            <Header
            title="Indianapolis lawn maintenance near me" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="n l"
            image="/window-washing.jpg"
            alt="Indianapolis lawn maintenance near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Indianapolis lawn maintenance near me" //KW
            desc="f   d  "
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="d"
            cardDesc3="f"
            />
            <Approach
            title="Indianapolis lawn maintenance near me" //KW
            desc="r i w u"
            />
            <Intro
            subtitle="Exceptional Indianapolis lawn maintenance near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  l"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="v"
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
        