
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
            title="Philadelphia irrigation installation | We'll Take Care Of Everything" 
            desc="Philadelphia irrigation installation: w ."
            canonical={`${props.website}/philadelphia-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia irrigation installation" //KW
            />
            <Header
            title="Philadelphia irrigation installation" //KW
            subtitle="w ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  e"
            image="/window-installation.jpg"
            alt="Philadelphia irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia irrigation installation" //KW
            desc=". s u O"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="c"
            cardDesc3="P"
            />
            <Approach
            title="Philadelphia irrigation installation" //KW
            desc="p .    "
            />
            <Intro
            subtitle="Exceptional Philadelphia irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="l w"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="u"
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
        