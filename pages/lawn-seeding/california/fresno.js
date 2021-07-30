
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
            title="Fresno lawn seeding | We'll Take Care Of Everything" 
            desc="Fresno lawn seeding: w  "
            canonical={`${props.website}/fresno-lawn-seeding`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno lawn seeding" //KW
            />
            <Header
            title="Fresno lawn seeding" //KW
            subtitle="w  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r  "
            image="/window-washing.jpg"
            alt="Fresno lawn seeding"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fresno lawn seeding" //KW
            desc="l r   e"
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="c"
            cardDesc3="l"
            />
            <Approach
            title="Fresno lawn seeding" //KW
            desc="g c h n"
            />
            <Intro
            subtitle="Exceptional Fresno lawn seeding" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="p F"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="s"
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
        