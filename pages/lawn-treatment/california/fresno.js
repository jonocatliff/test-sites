
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
            title="Fresno lawn treatment | We'll Take Care Of Everything" 
            desc="Fresno lawn treatment: w i"
            canonical={`${props.website}/fresno-lawn-treatment`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno lawn treatment" //KW
            />
            <Header
            title="Fresno lawn treatment" //KW
            subtitle="w i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="e t"
            image="/contractor.jpg"
            alt="Fresno lawn treatment"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Fresno lawn treatment" //KW
            desc="a s d a"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2=" "
            cardDesc3="i"
            />
            <Approach
            title="Fresno lawn treatment" //KW
            desc="e p v ,"
            />
            <Intro
            subtitle="Exceptional Fresno lawn treatment" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i i"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
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
        