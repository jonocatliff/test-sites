
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
            title="Austin window replacement companies | We'll Take Care Of Everything" 
            desc="Austin window replacement companies: , i"
            canonical={`${props.website}/austin-window-replacement-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Austin window replacement companies" //KW
            />
            <Header
            title="Austin window replacement companies" //KW
            subtitle=", i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="a f"
            image="/contractor.jpg"
            alt="Austin window replacement companies"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Austin window replacement companies" //KW
            desc="s , v l"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="a"
            cardDesc3="t"
            />
            <Approach
            title="Austin window replacement companies" //KW
            desc="y a h i"
            />
            <Intro
            subtitle="Exceptional Austin window replacement companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="   "
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="s"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        