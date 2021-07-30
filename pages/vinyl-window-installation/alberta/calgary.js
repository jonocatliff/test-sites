
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
            title="Calgary vinyl window installation | We'll Take Care Of Everything" 
            desc="Calgary vinyl window installation: w i"
            canonical={`${props.website}/calgary-vinyl-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary vinyl window installation" //KW
            />
            <Header
            title="Calgary vinyl window installation" //KW
            subtitle="w i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="i i"
            image="/contractor.jpg"
            alt="Calgary vinyl window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary vinyl window installation" //KW
            desc="r   h t"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="s"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="t"
            cardDesc3="r"
            />
            <Approach
            title="Calgary vinyl window installation" //KW
            desc="t     w"
            />
            <Intro
            subtitle="Exceptional Calgary vinyl window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="h  "
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2=","
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
        