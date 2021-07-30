
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
            title="Hamilton lawn repair | We'll Take Care Of Everything" 
            desc="Hamilton lawn repair: f n"
            canonical={`${props.website}/hamilton-lawn-repair`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Hamilton lawn repair" //KW
            />
            <Header
            title="Hamilton lawn repair" //KW
            subtitle="f n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s l"
            image="/contractor.jpg"
            alt="Hamilton lawn repair"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Hamilton lawn repair" //KW
            desc="h n s e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="v"
            cardDesc3="s"
            />
            <Approach
            title="Hamilton lawn repair" //KW
            desc="  . t u"
            />
            <Intro
            subtitle="Exceptional Hamilton lawn repair" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="y o"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        