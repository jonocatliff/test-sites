
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
            title="Oklahoma City home landscaping | We'll Take Care Of Everything" 
            desc="Oklahoma City home landscaping:    "
            canonical={`${props.website}/oklahoma-city-home-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City home landscaping" //KW
            />
            <Header
            title="Oklahoma City home landscaping" //KW
            subtitle="   "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u  "
            image="/window-washing.jpg"
            alt="Oklahoma City home landscaping"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Oklahoma City home landscaping" //KW
            desc="e s d i"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="w"
            cardDesc3="l"
            />
            <Approach
            title="Oklahoma City home landscaping" //KW
            desc="u   j w"
            />
            <Intro
            subtitle="Exceptional Oklahoma City home landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="g c"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="v"
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
        