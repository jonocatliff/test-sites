
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
            title="Fresno landscaping front of house | We'll Take Care Of Everything" 
            desc="Fresno landscaping front of house: c  "
            canonical={`${props.website}/fresno-landscaping-front-of-house`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fresno landscaping front of house" //KW
            />
            <Header
            title="Fresno landscaping front of house" //KW
            subtitle="c  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="h t"
            image="/window-washing.jpg"
            alt="Fresno landscaping front of house"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Fresno landscaping front of house" //KW
            desc="  a e w"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="r"
            cardDesc3="n"
            />
            <Approach
            title="Fresno landscaping front of house" //KW
            desc="o e   u"
            />
            <Intro
            subtitle="Exceptional Fresno landscaping front of house" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="f o"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="r"
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
        