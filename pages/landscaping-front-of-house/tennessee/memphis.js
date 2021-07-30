
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
            title="Memphis landscaping front of house | We'll Take Care Of Everything" 
            desc="Memphis landscaping front of house: b n"
            canonical={`${props.website}/memphis-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Memphis landscaping front of house" //KW
            />
            <Header
            title="Memphis landscaping front of house" //KW
            subtitle="b n"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="s e"
            image="/window-installations.jpg"
            alt="Memphis landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Memphis landscaping front of house" //KW
            desc="e n o w"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2=" "
            cardDesc3="e"
            />
            <Approach
            title="Memphis landscaping front of house" //KW
            desc="s e o k"
            />
            <Intro
            subtitle="Exceptional Memphis landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="a o"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2="c"
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
        