
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
            title="Boston window companies near me | We'll Take Care Of Everything" 
            desc="Boston window companies near me: f i"
            canonical={`${props.website}/boston-window-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston window companies near me" //KW
            />
            <Header
            title="Boston window companies near me" //KW
            subtitle="f i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="n r"
            image="/window-installations.jpg"
            alt="Boston window companies near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Boston window companies near me" //KW
            desc="i i a s"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="u"
            cardDesc3="t"
            />
            <Approach
            title="Boston window companies near me" //KW
            desc="  d a  "
            />
            <Intro
            subtitle="Exceptional Boston window companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="h e"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        