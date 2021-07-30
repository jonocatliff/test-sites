
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
            title="Houston window installation contractors | We'll Take Care Of Everything" 
            desc="Houston window installation contractors: i l"
            canonical={`${props.website}/houston-window-installation-contractors`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston window installation contractors" //KW
            />
            <Header
            title="Houston window installation contractors" //KW
            subtitle="i l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="i  "
            image="/window-installation.jpg"
            alt="Houston window installation contractors"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Houston window installation contractors" //KW
            desc="a , m  "
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="d"
            cardDesc3="l"
            />
            <Approach
            title="Houston window installation contractors" //KW
            desc="s p t  "
            />
            <Intro
            subtitle="Exceptional Houston window installation contractors" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="u s"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="n"
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
        