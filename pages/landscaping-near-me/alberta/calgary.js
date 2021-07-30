
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
            title="Calgary landscaping near me | We'll Take Care Of Everything" 
            desc="Calgary landscaping near me: . i"
            canonical={`${props.website}/calgary-landscaping-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Calgary landscaping near me" //KW
            />
            <Header
            title="Calgary landscaping near me" //KW
            subtitle=". i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="s i"
            image="/window-installation.jpg"
            alt="Calgary landscaping near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Calgary landscaping near me" //KW
            desc="w , h d"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="r"
            cardDesc3="c"
            />
            <Approach
            title="Calgary landscaping near me" //KW
            desc="u s a t"
            />
            <Intro
            subtitle="Exceptional Calgary landscaping near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="s n"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="t"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        