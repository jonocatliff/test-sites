
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
            title="Charlotte lawn cutting near me | We'll Take Care Of Everything" 
            desc="Charlotte lawn cutting near me:   u"
            canonical={`${props.website}/charlotte-lawn-cutting-near-me`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte lawn cutting near me" //KW
            />
            <Header
            title="Charlotte lawn cutting near me" //KW
            subtitle="  u"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e r"
            image="/window-washing.jpg"
            alt="Charlotte lawn cutting near me"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Charlotte lawn cutting near me" //KW
            desc="i   s l"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="a"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="u"
            cardDesc2=" "
            cardDesc3="w"
            />
            <Approach
            title="Charlotte lawn cutting near me" //KW
            desc="p f a u"
            />
            <Intro
            subtitle="Exceptional Charlotte lawn cutting near me" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="p"
            cardDesc2="e i"
            cardDesc3="t"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="h" //KW
            desc2=" "
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
        