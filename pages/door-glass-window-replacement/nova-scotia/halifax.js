
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
            title="Halifax door glass window replacement | We'll Take Care Of Everything" 
            desc="Halifax door glass window replacement: i o"
            canonical={`${props.website}/halifax-door-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Halifax door glass window replacement" //KW
            />
            <Header
            title="Halifax door glass window replacement" //KW
            subtitle="i o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="t o"
            image="/window-installation.jpg"
            alt="Halifax door glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Halifax door glass window replacement" //KW
            desc="a u i o"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="d"
            cardDesc3="n"
            />
            <Approach
            title="Halifax door glass window replacement" //KW
            desc="r l o i"
            />
            <Intro
            subtitle="Exceptional Halifax door glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="r s"
            cardDesc3="v"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="c"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        