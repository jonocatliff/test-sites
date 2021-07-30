
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
            title="Calgary lawn cutting near me | We'll Take Care Of Everything" 
            desc="Calgary lawn cutting near me: t  "
            canonical={`${props.website}/calgary-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary lawn cutting near me" //KW
            />
            <Header
            title="Calgary lawn cutting near me" //KW
            subtitle="t  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t t"
            image="/window-installations.jpg"
            alt="Calgary lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Calgary lawn cutting near me" //KW
            desc="n r h t"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="e"
            cardDesc3="c"
            />
            <Approach
            title="Calgary lawn cutting near me" //KW
            desc="    a y"
            />
            <Intro
            subtitle="Exceptional Calgary lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="g e"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
            desc2=" "
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
        