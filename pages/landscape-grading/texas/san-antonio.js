
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
            title="San Antonio landscape grading | We'll Take Care Of Everything" 
            desc="San Antonio landscape grading: o  "
            canonical={`${props.website}/san-antonio-landscape-grading`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio landscape grading" //KW
            />
            <Header
            title="San Antonio landscape grading" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="v n"
            image="/contractor.jpg"
            alt="San Antonio landscape grading"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Antonio landscape grading" //KW
            desc="e i e t"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="p"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="w"
            cardDesc3="t"
            />
            <Approach
            title="San Antonio landscape grading" //KW
            desc="  a a r"
            />
            <Intro
            subtitle="Exceptional San Antonio landscape grading" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i t"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="a"
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
        