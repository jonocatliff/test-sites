
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
            title="Boston bush trimming | We'll Take Care Of Everything" 
            desc="Boston bush trimming: s f"
            canonical={`${props.website}/boston-bush-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Boston bush trimming" //KW
            />
            <Header
            title="Boston bush trimming" //KW
            subtitle="s f"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="A r"
            image="/window-washing.jpg"
            alt="Boston bush trimming"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Boston bush trimming" //KW
            desc="e s r  "
            image="/window-installations.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="i"
            cardDesc3=" "
            />
            <Approach
            title="Boston bush trimming" //KW
            desc="o o i  "
            />
            <Intro
            subtitle="Exceptional Boston bush trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="i f"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="e" //KW
            desc2="t"
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
        