
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
            title="Montreal hedge trimming | We'll Take Care Of Everything" 
            desc="Montreal hedge trimming: t t"
            canonical={`${props.website}/montreal-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Montreal hedge trimming" //KW
            />
            <Header
            title="Montreal hedge trimming" //KW
            subtitle="t t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a a"
            image="/window-washing.jpg"
            alt="Montreal hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Montreal hedge trimming" //KW
            desc="  d s n"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="i"
            cardDesc3="e"
            />
            <Approach
            title="Montreal hedge trimming" //KW
            desc="e o j o"
            />
            <Intro
            subtitle="Exceptional Montreal hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="r r"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="n"
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
        