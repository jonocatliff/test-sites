
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
            title="Detroit hedge trimming near me | We'll Take Care Of Everything" 
            desc="Detroit hedge trimming near me: n  "
            canonical={`${props.website}/detroit-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit hedge trimming near me" //KW
            />
            <Header
            title="Detroit hedge trimming near me" //KW
            subtitle="n  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="o e"
            image="/window-installation.jpg"
            alt="Detroit hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Detroit hedge trimming near me" //KW
            desc="  A   n"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Detroit hedge trimming near me" //KW
            desc="  a d o"
            />
            <Intro
            subtitle="Exceptional Detroit hedge trimming near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="P u"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="e"
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
        