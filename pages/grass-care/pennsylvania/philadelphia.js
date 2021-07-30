
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
            title="Philadelphia grass care | We'll Take Care Of Everything" 
            desc="Philadelphia grass care: i ."
            canonical={`${props.website}/philadelphia-grass-care`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia grass care" //KW
            />
            <Header
            title="Philadelphia grass care" //KW
            subtitle="i ."
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="n g"
            image="/window-installations.jpg"
            alt="Philadelphia grass care"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Philadelphia grass care" //KW
            desc="o   r  "
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="w"
            cardDesc2="i"
            cardDesc3="a"
            />
            <Approach
            title="Philadelphia grass care" //KW
            desc="e f e y"
            />
            <Intro
            subtitle="Exceptional Philadelphia grass care" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="i  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="r" //KW
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
        