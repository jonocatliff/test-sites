
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
            title="Victoria lawn companies | We'll Take Care Of Everything" 
            desc="Victoria lawn companies:   e"
            canonical={`${props.website}/victoria-lawn-companies`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Victoria lawn companies" //KW
            />
            <Header
            title="Victoria lawn companies" //KW
            subtitle="  e"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="w  "
            image="/window-washing.jpg"
            alt="Victoria lawn companies"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Victoria lawn companies" //KW
            desc="  r c p"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="n"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="p"
            cardDesc2=" "
            cardDesc3="w"
            />
            <Approach
            title="Victoria lawn companies" //KW
            desc="r o a s"
            />
            <Intro
            subtitle="Exceptional Victoria lawn companies" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="l"
            cardDesc2="i t"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="f"
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
        