
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
            title="Phoenix irrigation installation | We'll Take Care Of Everything" 
            desc="Phoenix irrigation installation: I e"
            canonical={`${props.website}/phoenix-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix irrigation installation" //KW
            />
            <Header
            title="Phoenix irrigation installation" //KW
            subtitle="I e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="u a"
            image="/window-washing.jpg"
            alt="Phoenix irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Phoenix irrigation installation" //KW
            desc="n t c e"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="n"
            cardDesc3="r"
            />
            <Approach
            title="Phoenix irrigation installation" //KW
            desc="i t d r"
            />
            <Intro
            subtitle="Exceptional Phoenix irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="e w"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="g" //KW
            desc2="y"
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
        