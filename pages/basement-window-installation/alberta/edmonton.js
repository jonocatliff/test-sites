
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
            title="Edmonton basement window installation | We'll Take Care Of Everything" 
            desc="Edmonton basement window installation: s m"
            canonical={`${props.website}/edmonton-basement-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Edmonton basement window installation" //KW
            />
            <Header
            title="Edmonton basement window installation" //KW
            subtitle="s m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w r"
            image="/window-installations.jpg"
            alt="Edmonton basement window installation"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Edmonton basement window installation" //KW
            desc="s   n w"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="."
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="i"
            cardDesc3="c"
            />
            <Approach
            title="Edmonton basement window installation" //KW
            desc="e      "
            />
            <Intro
            subtitle="Exceptional Edmonton basement window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="g"
            cardDesc2="O e"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="d"
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
        