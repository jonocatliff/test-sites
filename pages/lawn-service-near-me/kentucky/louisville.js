
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
            title="Louisville lawn service near me | We'll Take Care Of Everything" 
            desc="Louisville lawn service near me:   o"
            canonical={`${props.website}/louisville-lawn-service-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville lawn service near me" //KW
            />
            <Header
            title="Louisville lawn service near me" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s s"
            image="/window-washing.jpg"
            alt="Louisville lawn service near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Louisville lawn service near me" //KW
            desc="i t e t"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="s"
            cardDesc3="u"
            />
            <Approach
            title="Louisville lawn service near me" //KW
            desc="o   d t"
            />
            <Intro
            subtitle="Exceptional Louisville lawn service near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="r n"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=" "
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
        