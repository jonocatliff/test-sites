
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
            title="Surrey home garden design | We'll Take Care Of Everything" 
            desc="Surrey home garden design: l t"
            canonical={`${props.website}/surrey-home-garden-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey home garden design" //KW
            />
            <Header
            title="Surrey home garden design" //KW
            subtitle="l t"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Installations"
            desc="e u"
            image="/window-washing.jpg"
            alt="Surrey home garden design"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Surrey home garden design" //KW
            desc="i p a d"
            image="/contractor.jpg"
            alt="Window Installations"
            />
            <Savings
            subtitle="Affordable Window Installations" //KW
            desc="e"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="p"
            cardDesc3=" "
            />
            <Approach
            title="Surrey home garden design" //KW
            desc="r d s  "
            />
            <Intro
            subtitle="Exceptional Surrey home garden design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="k"
            cardDesc2="u r"
            cardDesc3="y"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc=" " //KW
            desc2="."
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
        