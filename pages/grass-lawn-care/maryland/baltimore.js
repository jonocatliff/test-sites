
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
            title="Baltimore grass lawn care | We'll Take Care Of Everything" 
            desc="Baltimore grass lawn care: e u"
            canonical={`${props.website}/baltimore-grass-lawn-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore grass lawn care" //KW
            />
            <Header
            title="Baltimore grass lawn care" //KW
            subtitle="e u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="f d"
            image="/window-installation.jpg"
            alt="Baltimore grass lawn care"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Baltimore grass lawn care" //KW
            desc="r d s  "
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="n"
            cardDesc3="o"
            />
            <Approach
            title="Baltimore grass lawn care" //KW
            desc="s r   r"
            />
            <Intro
            subtitle="Exceptional Baltimore grass lawn care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="a e"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="v"
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
        