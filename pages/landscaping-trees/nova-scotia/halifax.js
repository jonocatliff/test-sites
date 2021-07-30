
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
            title="Halifax landscaping trees | We'll Take Care Of Everything" 
            desc="Halifax landscaping trees: e o"
            canonical={`${props.website}/halifax-landscaping-trees`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax landscaping trees" //KW
            />
            <Header
            title="Halifax landscaping trees" //KW
            subtitle="e o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="u t"
            image="/window-washing.jpg"
            alt="Halifax landscaping trees"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Halifax landscaping trees" //KW
            desc="w l e r"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="w"
            cardDesc3="o"
            />
            <Approach
            title="Halifax landscaping trees" //KW
            desc="d f   t"
            />
            <Intro
            subtitle="Exceptional Halifax landscaping trees" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="o r"
            cardDesc3="d"
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
        