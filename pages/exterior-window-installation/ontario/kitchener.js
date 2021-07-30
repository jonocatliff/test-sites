
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
            title="Kitchener exterior window installation | We'll Take Care Of Everything" 
            desc="Kitchener exterior window installation: h n"
            canonical={`${props.website}/kitchener-exterior-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener exterior window installation" //KW
            />
            <Header
            title="Kitchener exterior window installation" //KW
            subtitle="h n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a i"
            image="/window-installations.jpg"
            alt="Kitchener exterior window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Kitchener exterior window installation" //KW
            desc="t c v  "
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="m"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="r"
            cardDesc3="s"
            />
            <Approach
            title="Kitchener exterior window installation" //KW
            desc="o   i e"
            />
            <Intro
            subtitle="Exceptional Kitchener exterior window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="s e"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="g"
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
        