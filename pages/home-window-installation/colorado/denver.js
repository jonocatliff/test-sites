
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
            title="Denver home window installation | We'll Take Care Of Everything" 
            desc="Denver home window installation: t l"
            canonical={`${props.website}/denver-home-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Denver home window installation" //KW
            />
            <Header
            title="Denver home window installation" //KW
            subtitle="t l"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="n v"
            image="/window-installation.jpg"
            alt="Denver home window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Denver home window installation" //KW
            desc="e l a e"
            image="/window-washing.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="u"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="o"
            cardDesc3="t"
            />
            <Approach
            title="Denver home window installation" //KW
            desc="w m    "
            />
            <Intro
            subtitle="Exceptional Denver home window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="a"
            cardDesc2="g e"
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="p"
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
        