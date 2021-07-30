
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
            title="Chicago window replacement | We'll Take Care Of Everything" 
            desc="Chicago window replacement: a d"
            canonical={`${props.website}/chicago-window-replacement`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Chicago window replacement" //KW
            />
            <Header
            title="Chicago window replacement" //KW
            subtitle="a d"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="r a"
            image="/contractor.jpg"
            alt="Chicago window replacement"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Chicago window replacement" //KW
            desc="d h    "
            image="/window-installations.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="i"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="x"
            cardDesc2="y"
            cardDesc3="u"
            />
            <Approach
            title="Chicago window replacement" //KW
            desc="r a i t"
            />
            <Intro
            subtitle="Exceptional Chicago window replacement" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t i"
            cardDesc3="a"
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
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        