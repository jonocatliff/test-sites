
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
            title="Milwaukee home window installation near me | We'll Take Care Of Everything" 
            desc="Milwaukee home window installation near me: r o"
            canonical={`${props.website}/milwaukee-home-window-installation-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Milwaukee home window installation near me" //KW
            />
            <Header
            title="Milwaukee home window installation near me" //KW
            subtitle="r o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="f t"
            image="/contractor.jpg"
            alt="Milwaukee home window installation near me"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Milwaukee home window installation near me" //KW
            desc="y   o u"
            image="/window-installation.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="x"
            cardDesc3="n"
            />
            <Approach
            title="Milwaukee home window installation near me" //KW
            desc="r o u w"
            />
            <Intro
            subtitle="Exceptional Milwaukee home window installation near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="t"
            cardDesc2="s a"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="s" //KW
            desc2="l"
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
        