
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
            title="Oshawa home window installation near me | We'll Take Care Of Everything" 
            desc="Oshawa home window installation near me: o n"
            canonical={`${props.website}/oshawa-home-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa home window installation near me" //KW
            />
            <Header
            title="Oshawa home window installation near me" //KW
            subtitle="o n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o ."
            image="/window-washing.jpg"
            alt="Oshawa home window installation near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Oshawa home window installation near me" //KW
            desc="t   e o"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="e"
            cardDesc3="o"
            />
            <Approach
            title="Oshawa home window installation near me" //KW
            desc="d a e w"
            />
            <Intro
            subtitle="Exceptional Oshawa home window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="W e"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="g"
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
        