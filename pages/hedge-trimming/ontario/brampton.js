
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
            title="Brampton hedge trimming | We'll Take Care Of Everything" 
            desc="Brampton hedge trimming: e u"
            canonical={`${props.website}/brampton-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Brampton hedge trimming" //KW
            />
            <Header
            title="Brampton hedge trimming" //KW
            subtitle="e u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="u i"
            image="/contractor.jpg"
            alt="Brampton hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Brampton hedge trimming" //KW
            desc="  i e e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="v"
            cardDesc3="t"
            />
            <Approach
            title="Brampton hedge trimming" //KW
            desc="    k n"
            />
            <Intro
            subtitle="Exceptional Brampton hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="f i"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="b"
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
        