
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
            title="Surrey skylight window replacement | We'll Take Care Of Everything" 
            desc="Surrey skylight window replacement: o e"
            canonical={`${props.website}/surrey-skylight-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey skylight window replacement" //KW
            />
            <Header
            title="Surrey skylight window replacement" //KW
            subtitle="o e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e t"
            image="/window-installation.jpg"
            alt="Surrey skylight window replacement"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey skylight window replacement" //KW
            desc="v s e m"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="e"
            cardDesc2="s"
            cardDesc3="o"
            />
            <Approach
            title="Surrey skylight window replacement" //KW
            desc="d a a o"
            />
            <Intro
            subtitle="Exceptional Surrey skylight window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e w"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2="i"
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
        