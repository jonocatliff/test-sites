
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
            title="Jacksonville concrete curbing | We'll Take Care Of Everything" 
            desc="Jacksonville concrete curbing: s g"
            canonical={`${props.website}/jacksonville-concrete-curbing`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Jacksonville concrete curbing" //KW
            />
            <Header
            title="Jacksonville concrete curbing" //KW
            subtitle="s g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r b"
            image="/contractor.jpg"
            alt="Jacksonville concrete curbing"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Jacksonville concrete curbing" //KW
            desc=". n k i"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="t"
            cardDesc3="l"
            />
            <Approach
            title="Jacksonville concrete curbing" //KW
            desc="w a p a"
            />
            <Intro
            subtitle="Exceptional Jacksonville concrete curbing" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="w"
            cardDesc2="c  "
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="n"
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
        