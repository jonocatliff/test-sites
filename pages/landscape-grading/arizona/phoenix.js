
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
            title="Phoenix landscape grading | We'll Take Care Of Everything" 
            desc="Phoenix landscape grading: n o"
            canonical={`${props.website}/phoenix-landscape-grading`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix landscape grading" //KW
            />
            <Header
            title="Phoenix landscape grading" //KW
            subtitle="n o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  r"
            image="/window-washing.jpg"
            alt="Phoenix landscape grading"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Phoenix landscape grading" //KW
            desc="t w i e"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="Phoenix landscape grading" //KW
            desc="t e o y"
            />
            <Intro
            subtitle="Exceptional Phoenix landscape grading" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="d  "
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="i"
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
        