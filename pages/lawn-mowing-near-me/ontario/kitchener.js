
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
            title="Kitchener lawn mowing near me | We'll Take Care Of Everything" 
            desc="Kitchener lawn mowing near me: i m"
            canonical={`${props.website}/kitchener-lawn-mowing-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener lawn mowing near me" //KW
            />
            <Header
            title="Kitchener lawn mowing near me" //KW
            subtitle="i m"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="w m"
            image="/window-washing.jpg"
            alt="Kitchener lawn mowing near me"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Kitchener lawn mowing near me" //KW
            desc="y e a e"
            image="/window-installations.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="p"
            cardDesc3="w"
            />
            <Approach
            title="Kitchener lawn mowing near me" //KW
            desc="s   e  "
            />
            <Intro
            subtitle="Exceptional Kitchener lawn mowing near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="  t"
            cardDesc3="l"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="a" //KW
            desc2="j"
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
        