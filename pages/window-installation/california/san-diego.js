
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
            title="San Diego window installation | We'll Take Care Of Everything" 
            desc="San Diego window installation: a i"
            canonical={`${props.website}/san-diego-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="San Diego window installation" //KW
            />
            <Header
            title="San Diego window installation" //KW
            subtitle="a i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="d o"
            image="/contractor.jpg"
            alt="San Diego window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional San Diego window installation" //KW
            desc="s a i s"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="r"
            cardDesc3=" "
            />
            <Approach
            title="San Diego window installation" //KW
            desc="n   n  "
            />
            <Intro
            subtitle="Exceptional San Diego window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e a"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="t"
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
        