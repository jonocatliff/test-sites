
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
            title="Baltimore lawn repair near me | We'll Take Care Of Everything" 
            desc="Baltimore lawn repair near me: o  "
            canonical={`${props.website}/baltimore-lawn-repair-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore lawn repair near me" //KW
            />
            <Header
            title="Baltimore lawn repair near me" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n m"
            image="/window-installations.jpg"
            alt="Baltimore lawn repair near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Baltimore lawn repair near me" //KW
            desc="t n a w"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="b"
            cardDesc3="n"
            />
            <Approach
            title="Baltimore lawn repair near me" //KW
            desc="r o e  "
            />
            <Intro
            subtitle="Exceptional Baltimore lawn repair near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="a t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="u"
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
        