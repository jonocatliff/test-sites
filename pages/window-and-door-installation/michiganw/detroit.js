
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
            title="Detroit window and door installation | We'll Take Care Of Everything" 
            desc="Detroit window and door installation: o  "
            canonical={`${props.website}/detroit-window-and-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Detroit window and door installation" //KW
            />
            <Header
            title="Detroit window and door installation" //KW
            subtitle="o  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="r e"
            image="/window-installations.jpg"
            alt="Detroit window and door installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Detroit window and door installation" //KW
            desc="c   h s"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="e"
            cardDesc3="l"
            />
            <Approach
            title="Detroit window and door installation" //KW
            desc="  s b s"
            />
            <Intro
            subtitle="Exceptional Detroit window and door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="i"
            cardDesc2="o i"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2="."
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
        