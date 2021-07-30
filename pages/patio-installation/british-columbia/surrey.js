
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
            title="Surrey patio installation | We'll Take Care Of Everything" 
            desc="Surrey patio installation: I  "
            canonical={`${props.website}/surrey-patio-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey patio installation" //KW
            />
            <Header
            title="Surrey patio installation" //KW
            subtitle="I  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="o  "
            image="/contractor.jpg"
            alt="Surrey patio installation"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Surrey patio installation" //KW
            desc="o o f undefined"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3="h"
            />
            <Approach
            title="Surrey patio installation" //KW
            desc="e h d  "
            />
            <Intro
            subtitle="Exceptional Surrey patio installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="e undefined"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="f"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        