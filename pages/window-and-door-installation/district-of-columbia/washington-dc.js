
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
            title="Washington DC window and door installation | We'll Take Care Of Everything" 
            desc="Washington DC window and door installation: w m"
            canonical={`${props.website}/washington-dc-window-and-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Washington DC window and door installation" //KW
            />
            <Header
            title="Washington DC window and door installation" //KW
            subtitle="w m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="t '"
            image="/window-washing.jpg"
            alt="Washington DC window and door installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Washington DC window and door installation" //KW
            desc="o n e t"
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="s"
            cardDesc3="t"
            />
            <Approach
            title="Washington DC window and door installation" //KW
            desc="s o u ,"
            />
            <Intro
            subtitle="Exceptional Washington DC window and door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="s s"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="A"
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
        