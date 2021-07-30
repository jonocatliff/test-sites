
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
            title="Fresno grass cutting companies | We'll Take Care Of Everything" 
            desc="Fresno grass cutting companies: t  "
            canonical={`${props.website}/fresno-grass-cutting-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno grass cutting companies" //KW
            />
            <Header
            title="Fresno grass cutting companies" //KW
            subtitle="t  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="a s"
            image="/window-installations.jpg"
            alt="Fresno grass cutting companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fresno grass cutting companies" //KW
            desc="a l d  "
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="a"
            cardDesc3="o"
            />
            <Approach
            title="Fresno grass cutting companies" //KW
            desc="d p   v"
            />
            <Intro
            subtitle="Exceptional Fresno grass cutting companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="  c"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="t"
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
        