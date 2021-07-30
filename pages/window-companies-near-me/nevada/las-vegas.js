
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
            title="Las Vegas window companies near me | We'll Take Care Of Everything" 
            desc="Las Vegas window companies near me: i  "
            canonical={`${props.website}/las-vegas-window-companies-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas window companies near me" //KW
            />
            <Header
            title="Las Vegas window companies near me" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="l r"
            image="/contractor.jpg"
            alt="Las Vegas window companies near me"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Las Vegas window companies near me" //KW
            desc="r   a  "
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="v"
            cardDesc3="g"
            />
            <Approach
            title="Las Vegas window companies near me" //KW
            desc="  e o n"
            />
            <Intro
            subtitle="Exceptional Las Vegas window companies near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="c"
            cardDesc2="  f"
            cardDesc3="w"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Services!" //KW
            />
        </div>
        )
    }
        