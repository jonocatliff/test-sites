
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
            title="Quebec City door glass window replacement | We'll Take Care Of Everything" 
            desc="Quebec City door glass window replacement: o  "
            canonical={`${props.website}/quebec-city-door-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Quebec City door glass window replacement" //KW
            />
            <Header
            title="Quebec City door glass window replacement" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="u u"
            image="/window-washing.jpg"
            alt="Quebec City door glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Quebec City door glass window replacement" //KW
            desc="n l   o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="t"
            cardDesc3="n"
            />
            <Approach
            title="Quebec City door glass window replacement" //KW
            desc="d o i i"
            />
            <Intro
            subtitle="Exceptional Quebec City door glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="e x"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="r"
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
        