
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
            title="Toronto landscape curbing | We'll Take Care Of Everything" 
            desc="Toronto landscape curbing: w n"
            canonical={`${props.website}/toronto-landscape-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto landscape curbing" //KW
            />
            <Header
            title="Toronto landscape curbing" //KW
            subtitle="w n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  d"
            image="/contractor.jpg"
            alt="Toronto landscape curbing"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Toronto landscape curbing" //KW
            desc="  d t t"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="e"
            cardDesc3="w"
            />
            <Approach
            title="Toronto landscape curbing" //KW
            desc="b f a s"
            />
            <Intro
            subtitle="Exceptional Toronto landscape curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="o i"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="p"
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
        