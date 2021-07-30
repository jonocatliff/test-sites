
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
            title="San Antonio glass installation | We'll Take Care Of Everything" 
            desc="San Antonio glass installation: a ,"
            canonical={`${props.website}/san-antonio-glass-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio glass installation" //KW
            />
            <Header
            title="San Antonio glass installation" //KW
            subtitle="a ,"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e i"
            image="/window-washing.jpg"
            alt="San Antonio glass installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Antonio glass installation" //KW
            desc="n e   g"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="b"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3=" "
            />
            <Approach
            title="San Antonio glass installation" //KW
            desc="h f b e"
            />
            <Intro
            subtitle="Exceptional San Antonio glass installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="n x"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="r"
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
        