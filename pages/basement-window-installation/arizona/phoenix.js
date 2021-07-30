
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
            title="Phoenix basement window installation | We'll Take Care Of Everything" 
            desc="Phoenix basement window installation: t  "
            canonical={`${props.website}/phoenix-basement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix basement window installation" //KW
            />
            <Header
            title="Phoenix basement window installation" //KW
            subtitle="t  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="f r"
            image="/contractor.jpg"
            alt="Phoenix basement window installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Phoenix basement window installation" //KW
            desc="e e o  "
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="y"
            cardDesc3="t"
            />
            <Approach
            title="Phoenix basement window installation" //KW
            desc="e s h s"
            />
            <Intro
            subtitle="Exceptional Phoenix basement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="r  "
            cardDesc3="O"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="o"
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
        