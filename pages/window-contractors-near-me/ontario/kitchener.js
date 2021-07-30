
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
            title="Kitchener window contractors near me | We'll Take Care Of Everything" 
            desc="Kitchener window contractors near me: P o"
            canonical={`${props.website}/kitchener-window-contractors-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener window contractors near me" //KW
            />
            <Header
            title="Kitchener window contractors near me" //KW
            subtitle="P o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r m"
            image="/contractor.jpg"
            alt="Kitchener window contractors near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Kitchener window contractors near me" //KW
            desc="s s e i"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="Kitchener window contractors near me" //KW
            desc="e p t e"
            />
            <Intro
            subtitle="Exceptional Kitchener window contractors near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="d n"
            cardDesc3="m"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
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
        