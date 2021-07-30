
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
            title="Toronto lawn cutting near me | We'll Take Care Of Everything" 
            desc="Toronto lawn cutting near me: h u"
            canonical={`${props.website}/toronto-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto lawn cutting near me" //KW
            />
            <Header
            title="Toronto lawn cutting near me" //KW
            subtitle="h u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="m d"
            image="/window-installations.jpg"
            alt="Toronto lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Toronto lawn cutting near me" //KW
            desc="w     l"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="k"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="g"
            cardDesc2="a"
            cardDesc3="l"
            />
            <Approach
            title="Toronto lawn cutting near me" //KW
            desc="c u s e"
            />
            <Intro
            subtitle="Exceptional Toronto lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="i w"
            cardDesc3="i"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="O" //KW
            desc2="r"
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
        