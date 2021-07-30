
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
            title="Oshawa lawn care services near me | We'll Take Care Of Everything" 
            desc="Oshawa lawn care services near me: l u"
            canonical={`${props.website}/oshawa-lawn-care-services-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oshawa lawn care services near me" //KW
            />
            <Header
            title="Oshawa lawn care services near me" //KW
            subtitle="l u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o i"
            image="/window-installations.jpg"
            alt="Oshawa lawn care services near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Oshawa lawn care services near me" //KW
            desc="s   d ."
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="b"
            cardDesc3="o"
            />
            <Approach
            title="Oshawa lawn care services near me" //KW
            desc="i r   i"
            />
            <Intro
            subtitle="Exceptional Oshawa lawn care services near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="a t"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="P"
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
        