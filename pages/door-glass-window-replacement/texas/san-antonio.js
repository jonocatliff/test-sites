
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
            title="San Antonio door glass window replacement | We'll Take Care Of Everything" 
            desc="San Antonio door glass window replacement: s w"
            canonical={`${props.website}/san-antonio-door-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio door glass window replacement" //KW
            />
            <Header
            title="San Antonio door glass window replacement" //KW
            subtitle="s w"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w n"
            image="/window-washing.jpg"
            alt="San Antonio door glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Antonio door glass window replacement" //KW
            desc="t   n  "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="o"
            cardDesc3="s"
            />
            <Approach
            title="San Antonio door glass window replacement" //KW
            desc="i l u t"
            />
            <Intro
            subtitle="Exceptional San Antonio door glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="   "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="l"
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
        