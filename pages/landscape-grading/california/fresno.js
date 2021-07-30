
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
            title="Fresno landscape grading | We'll Take Care Of Everything" 
            desc="Fresno landscape grading: n y"
            canonical={`${props.website}/fresno-landscape-grading`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno landscape grading" //KW
            />
            <Header
            title="Fresno landscape grading" //KW
            subtitle="n y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="w  "
            image="/window-installation.jpg"
            alt="Fresno landscape grading"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fresno landscape grading" //KW
            desc="a   m s"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="i"
            cardDesc3="l"
            />
            <Approach
            title="Fresno landscape grading" //KW
            desc="s p p f"
            />
            <Intro
            subtitle="Exceptional Fresno landscape grading" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="o r"
            cardDesc3="n"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="W" //KW
            desc2="d"
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
        