
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
            title="Milwaukee basement egress window installation | We'll Take Care Of Everything" 
            desc="Milwaukee basement egress window installation:   o"
            canonical={`${props.website}/milwaukee-basement-egress-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee basement egress window installation" //KW
            />
            <Header
            title="Milwaukee basement egress window installation" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="d t"
            image="/window-installation.jpg"
            alt="Milwaukee basement egress window installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Milwaukee basement egress window installation" //KW
            desc="p v f l"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2="e"
            cardDesc3="n"
            />
            <Approach
            title="Milwaukee basement egress window installation" //KW
            desc="i   t e"
            />
            <Intro
            subtitle="Exceptional Milwaukee basement egress window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="c e"
            cardDesc3="d"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="l" //KW
            desc2="d"
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
        