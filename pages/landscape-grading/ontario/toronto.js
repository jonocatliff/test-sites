
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
            title="Toronto landscape grading | We'll Take Care Of Everything" 
            desc="Toronto landscape grading: t m"
            canonical={`${props.website}/toronto-landscape-grading`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto landscape grading" //KW
            />
            <Header
            title="Toronto landscape grading" //KW
            subtitle="t m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="s e"
            image="/window-installations.jpg"
            alt="Toronto landscape grading"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Toronto landscape grading" //KW
            desc="l   i a"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="s"
            cardDesc3="i"
            />
            <Approach
            title="Toronto landscape grading" //KW
            desc="  p   a"
            />
            <Intro
            subtitle="Exceptional Toronto landscape grading" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2=", f"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="a"
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
        