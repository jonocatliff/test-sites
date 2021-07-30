
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
            title="Seattle window cleaning | We'll Take Care Of Everything" 
            desc="Seattle window cleaning: s r"
            canonical={`${props.website}/seattle-window-cleaning`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Seattle window cleaning" //KW
            />
            <Header
            title="Seattle window cleaning" //KW
            subtitle="s r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  g"
            image="/window-installations.jpg"
            alt="Seattle window cleaning"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Seattle window cleaning" //KW
            desc="  i e o"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="a"
            cardDesc3="o"
            />
            <Approach
            title="Seattle window cleaning" //KW
            desc=", o r r"
            />
            <Intro
            subtitle="Exceptional Seattle window cleaning" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i r"
            cardDesc3=","
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="w"
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
        