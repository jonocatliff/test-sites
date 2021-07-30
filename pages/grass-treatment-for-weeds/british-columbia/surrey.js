
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
            title="Surrey grass treatment for weeds | We'll Take Care Of Everything" 
            desc="Surrey grass treatment for weeds: n e"
            canonical={`${props.website}/surrey-grass-treatment-for-weeds`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey grass treatment for weeds" //KW
            />
            <Header
            title="Surrey grass treatment for weeds" //KW
            subtitle="n e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="s f"
            image="/contractor.jpg"
            alt="Surrey grass treatment for weeds"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey grass treatment for weeds" //KW
            desc="y n   e"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="w"
            cardDesc3="e"
            />
            <Approach
            title="Surrey grass treatment for weeds" //KW
            desc="t o i e"
            />
            <Intro
            subtitle="Exceptional Surrey grass treatment for weeds" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="x"
            cardDesc2="n e"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="y" //KW
            desc2="w"
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
        