
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
            title="Kitchener hardscape | We'll Take Care Of Everything" 
            desc="Kitchener hardscape: u P"
            canonical={`${props.website}/kitchener-hardscape`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Kitchener hardscape" //KW
            />
            <Header
            title="Kitchener hardscape" //KW
            subtitle="u P"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="  n"
            image="/window-washing.jpg"
            alt="Kitchener hardscape"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Kitchener hardscape" //KW
            desc="v r c  "
            image="/window-installations.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="n"
            cardDesc3="l"
            />
            <Approach
            title="Kitchener hardscape" //KW
            desc="  t o v"
            />
            <Intro
            subtitle="Exceptional Kitchener hardscape" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="g u"
            cardDesc3="."
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="."
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
        