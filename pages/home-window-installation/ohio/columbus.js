
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
            title="Columbus home window installation | We'll Take Care Of Everything" 
            desc="Columbus home window installation:   t"
            canonical={`${props.website}/columbus-home-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Columbus home window installation" //KW
            />
            <Header
            title="Columbus home window installation" //KW
            subtitle="  t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="O  "
            image="/contractor.jpg"
            alt="Columbus home window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Columbus home window installation" //KW
            desc="o o i u"
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="l"
            cardDesc2="w"
            cardDesc3="r"
            />
            <Approach
            title="Columbus home window installation" //KW
            desc="l r   t"
            />
            <Intro
            subtitle="Exceptional Columbus home window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="d e"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
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
        