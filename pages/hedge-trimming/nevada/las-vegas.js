
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
            title="Las Vegas hedge trimming | We'll Take Care Of Everything" 
            desc="Las Vegas hedge trimming: i v"
            canonical={`${props.website}/las-vegas-hedge-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Las Vegas hedge trimming" //KW
            />
            <Header
            title="Las Vegas hedge trimming" //KW
            subtitle="i v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="v t"
            image="/window-washing.jpg"
            alt="Las Vegas hedge trimming"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Las Vegas hedge trimming" //KW
            desc="d e   s"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2=" "
            cardDesc3="l"
            />
            <Approach
            title="Las Vegas hedge trimming" //KW
            desc="a n w u"
            />
            <Intro
            subtitle="Exceptional Las Vegas hedge trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="r"
            cardDesc2="l t"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="n" //KW
            desc2="g"
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
        