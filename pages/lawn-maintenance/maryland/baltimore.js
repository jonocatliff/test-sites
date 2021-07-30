
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
            title="Baltimore lawn maintenance | We'll Take Care Of Everything" 
            desc="Baltimore lawn maintenance: h l"
            canonical={`${props.website}/baltimore-lawn-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Baltimore lawn maintenance" //KW
            />
            <Header
            title="Baltimore lawn maintenance" //KW
            subtitle="h l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s t"
            image="/window-washing.jpg"
            alt="Baltimore lawn maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Baltimore lawn maintenance" //KW
            desc="o l o i"
            image="/contractor.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="d"
            cardDesc2="."
            cardDesc3=" "
            />
            <Approach
            title="Baltimore lawn maintenance" //KW
            desc="r c h e"
            />
            <Intro
            subtitle="Exceptional Baltimore lawn maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c f"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="v" //KW
            desc2="r"
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
        