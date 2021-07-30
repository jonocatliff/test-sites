
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
            title="Winnipeg window companies near me | We'll Take Care Of Everything" 
            desc="Winnipeg window companies near me: o t"
            canonical={`${props.website}/winnipeg-window-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Winnipeg window companies near me" //KW
            />
            <Header
            title="Winnipeg window companies near me" //KW
            subtitle="o t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="r  "
            image="/window-installation.jpg"
            alt="Winnipeg window companies near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Winnipeg window companies near me" //KW
            desc="n s l a"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="b"
            cardDesc2=" "
            cardDesc3="w"
            />
            <Approach
            title="Winnipeg window companies near me" //KW
            desc="W   k y"
            />
            <Intro
            subtitle="Exceptional Winnipeg window companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="f d"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="n"
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
        