
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
            title="Ottowa window installation | We'll Take Care Of Everything" 
            desc="Ottowa window installation: r o"
            canonical={`${props.website}/ottowa-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Ottowa window installation" //KW
            />
            <Header
            title="Ottowa window installation" //KW
            subtitle="r o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="r l"
            image="/window-installation.jpg"
            alt="Ottowa window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Ottowa window installation" //KW
            desc="  n t t"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="a"
            cardDesc3="r"
            />
            <Approach
            title="Ottowa window installation" //KW
            desc="  f e p"
            />
            <Intro
            subtitle="Exceptional Ottowa window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="u n"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
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
        