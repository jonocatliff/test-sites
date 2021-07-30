
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
            title="Victoria lawn cutting near me | We'll Take Care Of Everything" 
            desc="Victoria lawn cutting near me: l a"
            canonical={`${props.website}/victoria-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria lawn cutting near me" //KW
            />
            <Header
            title="Victoria lawn cutting near me" //KW
            subtitle="l a"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="b o"
            image="/contractor.jpg"
            alt="Victoria lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Victoria lawn cutting near me" //KW
            desc="o i t a"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="d"
            cardDesc3="l"
            />
            <Approach
            title="Victoria lawn cutting near me" //KW
            desc="g w   a"
            />
            <Intro
            subtitle="Exceptional Victoria lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="o s"
            cardDesc3="f"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2=" "
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
        