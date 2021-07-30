
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
            title="San Antonio house glass window replacement | We'll Take Care Of Everything" 
            desc="San Antonio house glass window replacement: n e"
            canonical={`${props.website}/san-antonio-house-glass-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio house glass window replacement" //KW
            />
            <Header
            title="San Antonio house glass window replacement" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  y"
            image="/window-installation.jpg"
            alt="San Antonio house glass window replacement"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional San Antonio house glass window replacement" //KW
            desc="c o   x"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2=" "
            cardDesc3="a"
            />
            <Approach
            title="San Antonio house glass window replacement" //KW
            desc="P   a n"
            />
            <Intro
            subtitle="Exceptional San Antonio house glass window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="m e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="n"
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
        