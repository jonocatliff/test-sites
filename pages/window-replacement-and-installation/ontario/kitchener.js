
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
            title="Kitchener window replacement and installation | We'll Take Care Of Everything" 
            desc="Kitchener window replacement and installation: n u"
            canonical={`${props.website}/kitchener-window-replacement-and-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener window replacement and installation" //KW
            />
            <Header
            title="Kitchener window replacement and installation" //KW
            subtitle="n u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  a"
            image="/window-installation.jpg"
            alt="Kitchener window replacement and installation"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Kitchener window replacement and installation" //KW
            desc="v i e r"
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="d"
            cardDesc3="m"
            />
            <Approach
            title="Kitchener window replacement and installation" //KW
            desc="o i c p"
            />
            <Intro
            subtitle="Exceptional Kitchener window replacement and installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="p s"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="n"
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
        