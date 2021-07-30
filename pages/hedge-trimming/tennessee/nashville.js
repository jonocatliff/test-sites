
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
            title="Nashville hedge trimming | We'll Take Care Of Everything" 
            desc="Nashville hedge trimming: f t"
            canonical={`${props.website}/nashville-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Nashville hedge trimming" //KW
            />
            <Header
            title="Nashville hedge trimming" //KW
            subtitle="f t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t p"
            image="/window-installation.jpg"
            alt="Nashville hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Nashville hedge trimming" //KW
            desc="i   u e"
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="i"
            cardDesc2="o"
            cardDesc3="s"
            />
            <Approach
            title="Nashville hedge trimming" //KW
            desc="s i l  "
            />
            <Intro
            subtitle="Exceptional Nashville hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="a n"
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="w" //KW
            desc2="i"
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
        