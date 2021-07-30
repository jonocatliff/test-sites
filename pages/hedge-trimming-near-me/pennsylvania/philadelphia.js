
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
            title="Philadelphia hedge trimming near me | We'll Take Care Of Everything" 
            desc="Philadelphia hedge trimming near me: a ,"
            canonical={`${props.website}/philadelphia-hedge-trimming-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Philadelphia hedge trimming near me" //KW
            />
            <Header
            title="Philadelphia hedge trimming near me" //KW
            subtitle="a ,"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc=". o"
            image="/contractor.jpg"
            alt="Philadelphia hedge trimming near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Philadelphia hedge trimming near me" //KW
            desc="y   f e"
            image="/window-installation.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="n"
            cardDesc2="w"
            cardDesc3="n"
            />
            <Approach
            title="Philadelphia hedge trimming near me" //KW
            desc="d h u s"
            />
            <Intro
            subtitle="Exceptional Philadelphia hedge trimming near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="n ."
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="w"
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
        