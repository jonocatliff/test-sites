
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
            title="Baltimore window cleaning | We'll Take Care Of Everything" 
            desc="Baltimore window cleaning: s l"
            canonical={`${props.website}/baltimore-window-cleaning`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore window cleaning" //KW
            />
            <Header
            title="Baltimore window cleaning" //KW
            subtitle="s l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="t k"
            image="/window-washing.jpg"
            alt="Baltimore window cleaning"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Baltimore window cleaning" //KW
            desc="e l v t"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="s"
            cardDesc3=" "
            />
            <Approach
            title="Baltimore window cleaning" //KW
            desc="h m e w"
            />
            <Intro
            subtitle="Exceptional Baltimore window cleaning" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="n"
            cardDesc2="e h"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="g"
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
        