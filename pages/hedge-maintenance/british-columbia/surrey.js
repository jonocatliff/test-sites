
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
            title="Surrey hedge maintenance | We'll Take Care Of Everything" 
            desc="Surrey hedge maintenance: w o"
            canonical={`${props.website}/surrey-hedge-maintenance`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey hedge maintenance" //KW
            />
            <Header
            title="Surrey hedge maintenance" //KW
            subtitle="w o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  r"
            image="/window-installations.jpg"
            alt="Surrey hedge maintenance"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey hedge maintenance" //KW
            desc="o t x m"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="f"
            cardDesc2="c"
            cardDesc3="t"
            />
            <Approach
            title="Surrey hedge maintenance" //KW
            desc="i h s  "
            />
            <Intro
            subtitle="Exceptional Surrey hedge maintenance" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="r e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
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
        