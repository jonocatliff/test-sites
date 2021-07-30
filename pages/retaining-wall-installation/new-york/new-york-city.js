
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
            title="New York City retaining wall installation | We'll Take Care Of Everything" 
            desc="New York City retaining wall installation: a o"
            canonical={`${props.website}/new-york-city-retaining-wall-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="New York City retaining wall installation" //KW
            />
            <Header
            title="New York City retaining wall installation" //KW
            subtitle="a o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="f g"
            image="/window-installation.jpg"
            alt="New York City retaining wall installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional New York City retaining wall installation" //KW
            desc="a n s undefined"
            image="/window-washing.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="undefined"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="New York City retaining wall installation" //KW
            desc="n o n i"
            />
            <Intro
            subtitle="Exceptional New York City retaining wall installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="p undefined"
            cardDesc3="t"
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
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        