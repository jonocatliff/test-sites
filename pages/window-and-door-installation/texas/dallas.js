
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
            title="Dallas window and door installation | We'll Take Care Of Everything" 
            desc="Dallas window and door installation: i l"
            canonical={`${props.website}/dallas-window-and-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Dallas window and door installation" //KW
            />
            <Header
            title="Dallas window and door installation" //KW
            subtitle="i l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="   "
            image="/window-installation.jpg"
            alt="Dallas window and door installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Dallas window and door installation" //KW
            desc="o i l n"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="c"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="y"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Dallas window and door installation" //KW
            desc="  c r v"
            />
            <Intro
            subtitle="Exceptional Dallas window and door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="s s"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="m"
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
        