
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
            title="Dallas window door installation | We'll Take Care Of Everything" 
            desc="Dallas window door installation:   o"
            canonical={`${props.website}/dallas-window-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas window door installation" //KW
            />
            <Header
            title="Dallas window door installation" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="  o"
            image="/contractor.jpg"
            alt="Dallas window door installation"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Dallas window door installation" //KW
            desc="u e f e"
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="r"
            cardDesc3="y"
            />
            <Approach
            title="Dallas window door installation" //KW
            desc="s h b s"
            />
            <Intro
            subtitle="Exceptional Dallas window door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="r  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="d" //KW
            desc2="r"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        