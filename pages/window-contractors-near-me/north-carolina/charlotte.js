
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
            title="Charlotte window contractors near me | We'll Take Care Of Everything" 
            desc="Charlotte window contractors near me: i ’"
            canonical={`${props.website}/charlotte-window-contractors-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte window contractors near me" //KW
            />
            <Header
            title="Charlotte window contractors near me" //KW
            subtitle="i ’"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  n"
            image="/window-installation.jpg"
            alt="Charlotte window contractors near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Charlotte window contractors near me" //KW
            desc="d s r n"
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="u"
            cardDesc3=" "
            />
            <Approach
            title="Charlotte window contractors near me" //KW
            desc="w f n t"
            />
            <Intro
            subtitle="Exceptional Charlotte window contractors near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="e r"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="o"
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
        