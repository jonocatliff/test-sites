
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
            title="Oklahoma City window installation contractor | We'll Take Care Of Everything" 
            desc="Oklahoma City window installation contractor: t e"
            canonical={`${props.website}/oklahoma-city-window-installation-contractor`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City window installation contractor" //KW
            />
            <Header
            title="Oklahoma City window installation contractor" //KW
            subtitle="t e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="A a"
            image="/window-washing.jpg"
            alt="Oklahoma City window installation contractor"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Oklahoma City window installation contractor" //KW
            desc="e o t u"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="r"
            cardDesc3="o"
            />
            <Approach
            title="Oklahoma City window installation contractor" //KW
            desc="g c n s"
            />
            <Intro
            subtitle="Exceptional Oklahoma City window installation contractor" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="h"
            cardDesc2="r F"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="o"
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
        