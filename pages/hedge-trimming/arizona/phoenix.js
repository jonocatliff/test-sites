
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
            title="Phoenix hedge trimming | We'll Take Care Of Everything" 
            desc="Phoenix hedge trimming:   o"
            canonical={`${props.website}/phoenix-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Phoenix hedge trimming" //KW
            />
            <Header
            title="Phoenix hedge trimming" //KW
            subtitle="  o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="l n"
            image="/window-installations.jpg"
            alt="Phoenix hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Services" //KW
            title="Professional Phoenix hedge trimming" //KW
            desc="m o   e"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="r"
            cardDesc3="r"
            />
            <Approach
            title="Phoenix hedge trimming" //KW
            desc="r   r a"
            />
            <Intro
            subtitle="Exceptional Phoenix hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p r"
            cardDesc3="A"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2=" "
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
        