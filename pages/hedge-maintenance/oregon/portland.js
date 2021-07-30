
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
            title="Portland hedge maintenance | We'll Take Care Of Everything" 
            desc="Portland hedge maintenance: h l"
            canonical={`${props.website}/portland-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Portland hedge maintenance" //KW
            />
            <Header
            title="Portland hedge maintenance" //KW
            subtitle="h l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="a w"
            image="/window-washing.jpg"
            alt="Portland hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Portland hedge maintenance" //KW
            desc="a l o o"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2=" "
            cardDesc3="w"
            />
            <Approach
            title="Portland hedge maintenance" //KW
            desc="o p   o"
            />
            <Intro
            subtitle="Exceptional Portland hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="s d"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="'" //KW
            desc2="c"
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
        