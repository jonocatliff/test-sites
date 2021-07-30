
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
            title="Denver landscape rocks | We'll Take Care Of Everything" 
            desc="Denver landscape rocks: e s"
            canonical={`${props.website}/denver-landscape-rocks`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver landscape rocks" //KW
            />
            <Header
            title="Denver landscape rocks" //KW
            subtitle="e s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="i  "
            image="/window-washing.jpg"
            alt="Denver landscape rocks"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Denver landscape rocks" //KW
            desc="h e a s"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2=" "
            cardDesc3="o"
            />
            <Approach
            title="Denver landscape rocks" //KW
            desc="  o   e"
            />
            <Intro
            subtitle="Exceptional Denver landscape rocks" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="t  "
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="e"
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
        