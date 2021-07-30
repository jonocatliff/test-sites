
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
            title="Chicago exterior window installation | We'll Take Care Of Everything" 
            desc="Chicago exterior window installation: e e"
            canonical={`${props.website}/chicago-exterior-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago exterior window installation" //KW
            />
            <Header
            title="Chicago exterior window installation" //KW
            subtitle="e e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="  p"
            image="/window-installations.jpg"
            alt="Chicago exterior window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Chicago exterior window installation" //KW
            desc="p p i i"
            image="/window-installation.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3="c"
            />
            <Approach
            title="Chicago exterior window installation" //KW
            desc="p r o v"
            />
            <Intro
            subtitle="Exceptional Chicago exterior window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="h n"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="O" //KW
            desc2="u"
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
        