
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
            title="Surrey concrete curbing near me | We'll Take Care Of Everything" 
            desc="Surrey concrete curbing near me: o s"
            canonical={`${props.website}/surrey-concrete-curbing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey concrete curbing near me" //KW
            />
            <Header
            title="Surrey concrete curbing near me" //KW
            subtitle="o s"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="r r"
            image="/contractor.jpg"
            alt="Surrey concrete curbing near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey concrete curbing near me" //KW
            desc="o l n i"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="a"
            cardDesc3=" "
            />
            <Approach
            title="Surrey concrete curbing near me" //KW
            desc="a o   a"
            />
            <Intro
            subtitle="Exceptional Surrey concrete curbing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="i m"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="A" //KW
            desc2="t"
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
        