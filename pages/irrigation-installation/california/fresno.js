
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
            title="Fresno irrigation installation | We'll Take Care Of Everything" 
            desc="Fresno irrigation installation: f  "
            canonical={`${props.website}/fresno-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno irrigation installation" //KW
            />
            <Header
            title="Fresno irrigation installation" //KW
            subtitle="f  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="o t"
            image="/window-washing.jpg"
            alt="Fresno irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Fresno irrigation installation" //KW
            desc="a r T r"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="a"
            cardDesc3="i"
            />
            <Approach
            title="Fresno irrigation installation" //KW
            desc="e u d  "
            />
            <Intro
            subtitle="Exceptional Fresno irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i  "
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="w"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        