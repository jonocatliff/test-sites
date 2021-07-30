
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
            title="Tucson weed control companies near me | We'll Take Care Of Everything" 
            desc="Tucson weed control companies near me: a t"
            canonical={`${props.website}/tucson-weed-control-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson weed control companies near me" //KW
            />
            <Header
            title="Tucson weed control companies near me" //KW
            subtitle="a t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="  o"
            image="/window-installation.jpg"
            alt="Tucson weed control companies near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Tucson weed control companies near me" //KW
            desc="    z undefined"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="i"
            cardDesc3="u"
            />
            <Approach
            title="Tucson weed control companies near me" //KW
            desc="l e y w"
            />
            <Intro
            subtitle="Exceptional Tucson weed control companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="e undefined"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
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
        