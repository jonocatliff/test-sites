
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
            title="Surrey front yard landscaping | We'll Take Care Of Everything" 
            desc="Surrey front yard landscaping: a r"
            canonical={`${props.website}/surrey-front-yard-landscaping`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey front yard landscaping" //KW
            />
            <Header
            title="Surrey front yard landscaping" //KW
            subtitle="a r"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="c u"
            image="/window-installations.jpg"
            alt="Surrey front yard landscaping"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Surrey front yard landscaping" //KW
            desc="n l   d"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="r"
            cardDesc2="n"
            cardDesc3="t"
            />
            <Approach
            title="Surrey front yard landscaping" //KW
            desc="e c s r"
            />
            <Intro
            subtitle="Exceptional Surrey front yard landscaping" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="a o"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
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
        