
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
            title="San Antonio home garden design | We'll Take Care Of Everything" 
            desc="San Antonio home garden design:   c"
            canonical={`${props.website}/san-antonio-home-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio home garden design" //KW
            />
            <Header
            title="San Antonio home garden design" //KW
            subtitle="  c"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="o t"
            image="/window-installation.jpg"
            alt="San Antonio home garden design"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional San Antonio home garden design" //KW
            desc="s y s  "
            image="/window-washing.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="i"
            cardDesc3="i"
            />
            <Approach
            title="San Antonio home garden design" //KW
            desc="t y s t"
            />
            <Intro
            subtitle="Exceptional San Antonio home garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="  m"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="o"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        