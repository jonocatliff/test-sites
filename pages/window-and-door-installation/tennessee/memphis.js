
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
            title="Memphis window and door installation | We'll Take Care Of Everything" 
            desc="Memphis window and door installation: n n"
            canonical={`${props.website}/memphis-window-and-door-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis window and door installation" //KW
            />
            <Header
            title="Memphis window and door installation" //KW
            subtitle="n n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  e"
            image="/window-installations.jpg"
            alt="Memphis window and door installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Memphis window and door installation" //KW
            desc="p t r o"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="b"
            cardDesc3="t"
            />
            <Approach
            title="Memphis window and door installation" //KW
            desc="m p g i"
            />
            <Intro
            subtitle="Exceptional Memphis window and door installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="  ,"
            cardDesc3="g"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2=" "
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
        