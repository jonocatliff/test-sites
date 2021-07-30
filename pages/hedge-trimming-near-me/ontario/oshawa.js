
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
            title="Oshawa hedge trimming near me | We'll Take Care Of Everything" 
            desc="Oshawa hedge trimming near me: y r"
            canonical={`${props.website}/oshawa-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa hedge trimming near me" //KW
            />
            <Header
            title="Oshawa hedge trimming near me" //KW
            subtitle="y r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="p i"
            image="/window-washing.jpg"
            alt="Oshawa hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oshawa hedge trimming near me" //KW
            desc="r a t l"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2=" "
            cardDesc3=" "
            />
            <Approach
            title="Oshawa hedge trimming near me" //KW
            desc="I o s g"
            />
            <Intro
            subtitle="Exceptional Oshawa hedge trimming near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="v"
            cardDesc2="  n"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        