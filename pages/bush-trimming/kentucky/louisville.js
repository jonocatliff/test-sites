
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
            title="Louisville bush trimming | We'll Take Care Of Everything" 
            desc="Louisville bush trimming:   h"
            canonical={`${props.website}/louisville-bush-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Louisville bush trimming" //KW
            />
            <Header
            title="Louisville bush trimming" //KW
            subtitle="  h"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="w e"
            image="/contractor.jpg"
            alt="Louisville bush trimming"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Louisville bush trimming" //KW
            desc="w   d r"
            image="/window-installation.jpg"
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
            cardDesc3="k"
            />
            <Approach
            title="Louisville bush trimming" //KW
            desc="o ’ r s"
            />
            <Intro
            subtitle="Exceptional Louisville bush trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="m e"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2=","
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
        