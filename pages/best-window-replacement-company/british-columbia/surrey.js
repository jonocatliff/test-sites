
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
            title="Surrey best window replacement company | We'll Take Care Of Everything" 
            desc="Surrey best window replacement company: h t"
            canonical={`${props.website}/surrey-best-window-replacement-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey best window replacement company" //KW
            />
            <Header
            title="Surrey best window replacement company" //KW
            subtitle="h t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="u  "
            image="/window-installations.jpg"
            alt="Surrey best window replacement company"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey best window replacement company" //KW
            desc="    c t"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="q"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2="y"
            cardDesc3=" "
            />
            <Approach
            title="Surrey best window replacement company" //KW
            desc="s o w t"
            />
            <Intro
            subtitle="Exceptional Surrey best window replacement company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="l f"
            cardDesc3="W"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="a"
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
        