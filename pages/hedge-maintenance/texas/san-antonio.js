
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
            title="San Antonio hedge maintenance | We'll Take Care Of Everything" 
            desc="San Antonio hedge maintenance:   r"
            canonical={`${props.website}/san-antonio-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Antonio hedge maintenance" //KW
            />
            <Header
            title="San Antonio hedge maintenance" //KW
            subtitle="  r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="t y"
            image="/window-washing.jpg"
            alt="San Antonio hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional San Antonio hedge maintenance" //KW
            desc="s o   i"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="o"
            cardDesc3="y"
            />
            <Approach
            title="San Antonio hedge maintenance" //KW
            desc="a u . o"
            />
            <Intro
            subtitle="Exceptional San Antonio hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="t r"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="t"
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
        