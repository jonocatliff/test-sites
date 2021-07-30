
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
            title="Tucson hedge trimming | We'll Take Care Of Everything" 
            desc="Tucson hedge trimming: A o"
            canonical={`${props.website}/tucson-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson hedge trimming" //KW
            />
            <Header
            title="Tucson hedge trimming" //KW
            subtitle="A o"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="o o"
            image="/window-installations.jpg"
            alt="Tucson hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Cleaning" //KW
            title="Professional Tucson hedge trimming" //KW
            desc="e p O u"
            image="/window-installation.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="c"
            cardDesc2="o"
            cardDesc3="u"
            />
            <Approach
            title="Tucson hedge trimming" //KW
            desc="  i t ."
            />
            <Intro
            subtitle="Exceptional Tucson hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1=" "
            cardDesc2="u a"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="t" //KW
            desc2="a"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Cleaning!" //KW
            />
        </div>
        )
    }
        